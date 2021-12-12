from django.shortcuts import render

from rest_framework import mixins, generics
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
def update_destroy(request, id):
    wine = Wine.objects.filter(id=id).first()
    if request.method == 'PUT':
        wine_serializer = WineSerializer.update()
    elif request.method == 'DELETE':
        wine_serializer = WineSerializer.delete(wine)
    else:
        pass

class UpdateDestroyApi(mixins.DestroyModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView):
    serializer_class = WineSerializer
    queryset = Wine.objects.all()
    lookup_field = 'id'

