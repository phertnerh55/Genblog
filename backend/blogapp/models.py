from django.db import models
from django.utils import timezone

# Create your models here.
class Blog(models.Model):
    blogTitle=models.CharField(max_length=150)
    blogPost=models.TextField()
    author=models.CharField(max_length=30)
    date_published=models.DateTimeField(default=timezone.now())

    def __str__(self):
        return  self.blogTitle  