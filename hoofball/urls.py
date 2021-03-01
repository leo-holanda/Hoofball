from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('finances', views.finances, name='finances'),
    path('fixtures', views.fixtures, name='fixtures'),
    path('goals', views.goals, name='goals'),
    path('squad', views.squad, name='squad'),
    path('suggestions', views.suggestions, name='suggestions'),
    path('create_comment', views.create_comment, name='create_comment')
]