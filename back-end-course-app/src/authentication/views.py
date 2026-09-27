from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template.context_processors import request
from django.utils import timezone
from django.db import utils
from django.contrib import messages
from . import serializers
from . import models
from src.helpers.helper import Helper
from src.error.errors import ResponseError
import json
import random


# Create your views here.
@method_decorator(
    csrf_exempt, name="dispatch"
)  # untuk mematikan fitur crsf, nyalakan fitur ini jika menggunakan cookie atau session
class UserRegister(View):
    # user register
    def post(self, request):
        data_req = json.loads(request.body)
        validate_req = serializers.RegisterValidation(data=data_req)

        # check valid
        if not validate_req.is_valid():
            return JsonResponse(validate_req.errors, status=400)

        # check email
        query_email = models.Users.objects.values("email")
        if query_email == data_req["email"]:
            return JsonResponse({"message": "email sudah terdaftar"}, status=400)

        # create kode
        kode = random.randint(1000, 9999)

        # insert user
        user = models.Users.objects.create(
            first_name=data_req["first_name"],
            last_name=data_req["last_name"],
            email=data_req["email"],
            password=data_req["password"],
        )

        # get users
        email = data_req["email"]
        models.Users_Validate.objects.create(
            id_user=user, kode=kode, expired_at=Helper.timeExpired(2)
        )

        message_email = f"kode validate akun {str(kode)}"

        try:
            send_mail = Helper.send_email_user(message=message_email, email=[email])
        except:
            return ResponseError.error(
                message="terjadi kesalahan pada proses pengiriman email", status=400
            )

        return send_mail


@method_decorator(csrf_exempt, name="dispatch")
class KodeValidate(View):

    # kode validate
    def post(self, request):
        data_req = json.loads(request.body)

        # get account
        try:
            account = models.Users_Validate.objects.get(id_user_id=data_req["id_user"])
        except models.Users_Validate.DoesNotExist:
            return ResponseError.error(message="id_user not_found", status=404)

        # check expired
        if timezone.now() > account.expired_at:
            return ResponseError.error(message="kode tidak valid", status=400)
        
        # check code
        if str(data_req["kode"]) != str(account.kode):
            return ResponseError.error(message="kode tidak valid", status=400)
        
        # check length input
        if len(str(data_req["kode"])) > 4:
            return ResponseError.error(message="kode tidak valid", status=400)
        
        account.status = models.Status_Validate.verifikasi
        account.save(update_fields=["status"])
        return JsonResponse({"message": "verifikasi akun success"}, status=200)    
        
        
