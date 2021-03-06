from django.urls import path

from .views import *

urlpatterns = [
    path('get/all', get_wines),
    path('get/<int:id>', get_wine),
    path('update/destroy/<int:id>', update_destroy),
]
