from django.shortcuts import get_object_or_404

from rest_framework import mixins, generics
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status

from .models import Wine
from .serializers import WineSerializer

@api_view(['GET'])
def get_wines(request):
    '''
        get all wines
    '''
    wines = Wine.objects.all()
    wine_serializer = WineSerializer(
        wines,
        many=True
    )
    return Response(wine_serializer.data)

@api_view(['GET'])
def get_wine(request, id):
    '''
        get specific wine using id
    '''
    wine = get_object_or_404(Wine, id=id)
    wine_serializer = WineSerializer(wine)
    return Response(wine_serializer.data)

@api_view(['PUT', 'DELETE'])
def update_destroy(request, id):
    '''
        update or destroy wine
    '''
    wine = get_object_or_404(Wine, id=id)
    wine_serializer = WineSerializer(wine)
    if not wine_serializer.is_valid():
        return Response(
            wine_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
    if request.method == 'PUT':
        wine_serializer.update(
            data=request.data
        )
        status = status.HTTP_202_ACCEPTED
    elif request.method == 'DELETE':
        wine_serializer = WineSerializer.delete(wine)
        status = status.HTTP_204_NO_CONTENT
    data = wine_serializer.data
    return Response(data, status=status)
