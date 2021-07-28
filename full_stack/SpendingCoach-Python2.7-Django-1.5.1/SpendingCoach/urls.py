from django.conf.urls import patterns, include, url
from views import index
from django.contrib import admin
from django.views.generic.base import TemplateView

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'SpendingCoach.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # (r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^index', index)
)
