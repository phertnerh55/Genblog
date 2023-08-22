from django.db import models
from django.utils import timezone

# Create your models here.
def upload_to(instance,filename):
    return "blogs/{filename}".format(filename=filename)
    
class Blog(models.Model):
    blogTitle=models.CharField(max_length=150)
    blogPost=models.TextField()
    blogImage=models.ImageField(("image"), upload_to=upload_to,default="blogs/default.png")
    author=models.CharField(max_length=30)
    date_published=models.DateTimeField(default=timezone.now())

    def __str__(self):
        return  self.blogTitle  