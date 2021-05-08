from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post


class PostAll(APIView):
    def get(self, request):
        try:
            post = Post.objects.all().order_by('-created_at')
            res_list = [
                {
                    'id': p.id,
                    'date': p.created_at,
                    'title': p.title,
                }
                for p in post
            ]
            return Response(res_list)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
