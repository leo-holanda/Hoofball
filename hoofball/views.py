from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Comment

# Create your views here.

def index(request):
    return render(request, 'hoofball/index.html')

def finances(request):
    filtered_comments = [comment.as_json() for comment in Comment.objects.filter(source="finances")]
    return render(request, 'hoofball/finances.html', {'all_comments': filtered_comments})

def fixtures(request):
    filtered_comments = [comment.as_json() for comment in Comment.objects.filter(source="fixtures")]
    return render(request, 'hoofball/fixtures.html', {'all_comments': filtered_comments})

def goals(request):
    filtered_comments = [comment.as_json() for comment in Comment.objects.filter(source="goals")]
    return render(request, 'hoofball/goals.html', {'all_comments': filtered_comments})

def squad(request):
    filtered_comments = [comment.as_json() for comment in Comment.objects.filter(source="squad")]
    return render(request, 'hoofball/squad.html', {'all_comments': filtered_comments})

def suggestions(request):
    return render(request, 'hoofball/suggestions.html')

def create_comment(request):
    comment = request.POST
    new_comment = Comment()
    new_comment.author = comment['author']
    new_comment.text = comment['text']
    new_comment.source = comment['source']
    new_comment.save()
    return render(request, 'hoofball/{}.html'.format(comment["source"]))