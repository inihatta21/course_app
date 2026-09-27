from django.urls import path
from . import views

urlpatterns = [
    path(
        "register/", views.UserRegister.as_view(), name="user-register"
    ) # name= digunakan agar mudah digunakan untuk pengalihan ke url ini
    , path("validate-kode/", views.KodeValidate.as_view(), name="validate-kode")
]
