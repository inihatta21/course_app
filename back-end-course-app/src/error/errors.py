from django.http import JsonResponse

class ResponseError(Exception):
    
    def __init__(self, message, status=400):
        self.message = message
        self.status = status
        super().__init__(message)
    
    @staticmethod
    def error(message: str, status: int):
        return JsonResponse({"message":message}, status=status)
    
    