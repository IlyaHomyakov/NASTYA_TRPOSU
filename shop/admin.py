from django.contrib import admin
from django.contrib.auth.models import User, Group

from .models import Coat, Order

admin.site.unregister(User)
admin.site.unregister(Group)

admin.site.site_header = 'C M K V'


@admin.register(Coat)
class CoatAdmin(admin.ModelAdmin):
    list_display = ('title', 'sex', 'price')
    list_filter = ('sex',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer', 'customer_phone', 'created_at', 'item')
    readonly_fields = ('customer', 'customer_phone', 'created_at', 'item')