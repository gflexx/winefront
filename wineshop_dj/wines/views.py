from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .models import Wine
from .serializers import WineSerializer

# get all wines
@api_view(['GET'])
def get_wines(request):
    wines = Wine.objects.all()
    wine_serializer = WineSerializer(
        wines,
        many=True
    )
    return Response(wine_serializer.data)

# get specific wine using id
@api_view(['GET'])
def get_wine(request, id):
    wine = Wine.objects.filter(id=id).first()
    wine_serializer = WineSerializer(wine)
    return Response(wine_serializer.data)

@api_view(['PUT', 'DELETE'])
def delete_wine(request, id):
    wine = Wine.objects.filter(id=id).first()
    if request.method is 'PUT':
        pass
    elif request.method is 'DELETE':
        pass

