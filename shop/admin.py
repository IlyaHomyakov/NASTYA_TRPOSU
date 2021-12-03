from django.contrib import admin
from .models import Coat, CoatSize, Order


@admin.register(Coat)
class CoatAdmin(admin.ModelAdmin):
    list_display = ('title', 'sex', 'price')
    list_filter = ('sex',)


@admin.register(CoatSize)
class CoatSizeAdmin(admin.ModelAdmin):
    list_display = ('size',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer', 'customer_phone', 'created_at', 'item')
