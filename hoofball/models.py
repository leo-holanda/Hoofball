from django.db import models
from django.utils import timezone

# Create your models here.

class Player(models.Model):
    name = models.CharField(max_length=50)
    gameID = models.IntegerField()
    age = models.IntegerField()
    position = models.CharField(max_length=25)
    wage = models.DecimalField(max_digits=9, decimal_places=2)
    value = models.IntegerField()
    description = models.TextField(max_length=280)

class Comment(models.Model):
    author = models.CharField(max_length=50)
    text = models.TextField(max_length=280)
    created_at = models.DateTimeField(default=timezone.now)
    source = models.CharField(max_length=15)