from rest_framework import serializers
from . import models
from nomadgram.images import serializers as image_serializers

class UserProfileSerializer(serializers.ModelSerializer):
  
  images = image_serializers.CountImageSerializer(many=True, read_only=True)
  post_count = serializers.ReadOnlyField()
  followers_count = serializers.ReadOnlyField()
  followings_count = serializers.ReadOnlyField()
  
  class Meta:
    model = models.User
    fields = (
      'id',
      'username',
      'name',
      'bio',
      'website',
      'post_count',
      'followers_count',
      'followings_count',
      'images',
      'profile_image'
    )

class ListUserSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.User
    fields = (
      'id',
      'profile_image',
      'username',
      'name'
    )
