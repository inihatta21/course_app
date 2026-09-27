from django.utils import timezone
from django.core.mail import send_mail
from django.http import JsonResponse
from datetime import timedelta
import os


class Helper:

    # helper time expired
    @staticmethod
    def timeExpired(duration: int):
        return timezone.now() + timedelta(minutes=duration)

    # helper send email
    @staticmethod
    def send_email_user(message: str, email: list[str]):
        send_mail(
            subject=os.environ.get("EMAIL_HOST_USER"),
            message=message,
            from_email=os.environ.get("EMAIL_HOST_USER"),
            recipient_list=email,
            fail_silently=False,
        )
        return JsonResponse({"message": "send email success"})
