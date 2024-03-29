"""orgasmi_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers
from orgasmi_backend import views


router = routers.DefaultRouter()
router.register(r"orders", views.OrdersViewSet, basename="Orders")
router.register(r"users", views.UsersViewSet, basename="Users")
router.register(r"professionals", views.ProfessionalViewSet, basename="Professionals")
router.register(r"services", views.ServicesViewSet, basename="Services")


urlpatterns = [
    url(r"api/", include(router.urls)),
    path('admin/', admin.site.urls),

]
