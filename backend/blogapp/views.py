from django.shortcuts import render
from .serializers import BlogSerializer 
from .models import Blog
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class BlogView(APIView):
    def get(self,request,format=None):
        blogs=Blog.objects.all()
        serializers=BlogSerializer(blogs,many=True)
        return Response(serializers.data)
