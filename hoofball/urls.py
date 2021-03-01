from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('finances', views.finances, name='finances'),
    path('fixtures', views.fixtures, name='fixtures'),
    path('goals', views.goals, name='goals'),
    path('squad', views.squad, name='squad'),
    path('suggestions', views.suggestions, name='suggestions'),
    path('new_comment', views.new_comment, name='new_comment'),
    path('new_player', views.new_player, name='new_player')
]