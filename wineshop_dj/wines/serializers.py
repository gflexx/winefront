from rest_framework import serializers

from .models import Wine

class WineSerializer(serializers.ModelSerializer):
    serializers.ImageField(use_url=True, required=False, allow_null=True)
    class Meta:
        model = Wine
        fields = ('id', 'name', 'quantity', 'image', 'details')
