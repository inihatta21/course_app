from django.db import models

# Create your models here.

class Users(models.Model):
    id_user = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    profile = models.TextField(blank=True, null=True)
    
    class Meta:
        # menentukan nama tabel
        db_table = 'users'
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} : {self.email}"

# enum status validate
class Status_Validate(models.TextChoices):
    verifikasi = "VERIFIKASI", "verifikasi"
    not_verifikasi = "NOT VERIFIKASI", "not verifikasi"

class Users_Validate(models.Model):
    id_user_validate = models.AutoField(primary_key=True)
    id_user = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name="users"
    )
    status = models.CharField(
        default=Status_Validate.not_verifikasi,
        choices=Status_Validate.choices,
    )
    kode = models.CharField(max_length=4, null=True)
    expired_at = models.DateTimeField()
    
    class Meta:
        db_table = "users_validate"
        
    def __str__(self):
        return f"{self.id_user} : {self.kode}"