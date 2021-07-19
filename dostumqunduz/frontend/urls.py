from django.urls import path
from .views import indexView, test

urlpatterns = [
    path('', indexView),
    path('test', test),
    path('<str:url>', indexView),
]