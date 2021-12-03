from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from .views import *

urlpatterns = [
    path('', main, name='main'),
    path('catalog/man/', man_catalog, name='man_catalog'),
    path('catalog/woman/', woman_catalog, name='woman_catalog'),
    path('product/<int:item_id>', product, name='product'),
    path('confirm-order/', confirm_order, name='confirm_order'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
