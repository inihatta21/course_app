from rest_framework import serializers
from . import models

# register validation
class RegisterValidation(serializers.ModelSerializer):
    class Meta:
        model = models.Users
        fields ='__all__'
    
    # check email
    def validate_email(self, value):
        if not value.endswith("@gmail.com"):
            raise serializers.ValidationError("format email invalid")
        return value
    
    