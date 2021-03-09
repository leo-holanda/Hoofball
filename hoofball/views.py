from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import redirect
from .models import Player, Comment

# Create your views here.

def index(request):
    return render(request, 'hoofball/index.html')

def finances(request):
    comments = Comment.objects.all()
    return render(request, 'hoofball/finances.html', {'all_comments': comments})

def fixtures(request):
    comments = Comment.objects.all()
    return render(request, 'hoofball/fixtures.html', {'all_comments': comments})

def goals(request):
    comments = Comment.objects.all()
    return render(request, 'hoofball/goals.html', {'all_comments': comments})

def squad(request):
    comments = Comment.objects.all()
    return render(request, 'hoofball/squad.html', {'all_comments': comments})

def suggestions(request):
    players = Player.objects.all()
    return render(request, 'hoofball/suggestions.html', {'all_players': players})

def new_comment(request):
    comment = request.POST
    new_comment = Comment()
    new_comment.author = comment['author']
    new_comment.text = comment['text']
    new_comment.source = comment['source']
    new_comment.save()
    return redirect("/{}".format(comment["source"]))

def new_player(request):
    player = request.POST
    new_player = Player()
    new_player.name = player['name']
    new_player.gameID = player['gameID']
    new_player.age = player['age']
    new_player.position = player['position']
    new_player.wage = player['wage']
    new_player.value = player['value']
    new_player.description = player['description']

    new_player.save()

    return redirect('/suggestions')