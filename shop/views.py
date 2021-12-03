from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Coat
from django.shortcuts import get_object_or_404


def main(request):
    return render(request, 'shop/main.html')


def man_catalog(request):
    context = {'coats': Coat.objects.filter(sex='Муж')}
    return render(request, 'shop/catalog.html', context)


def woman_catalog(request):
    context = {'coats': Coat.objects.filter(sex='Жен')}
    return render(request, 'shop/catalog.html', context)


def product(request, item_id):
    context = {'coat': get_object_or_404(Coat, pk=item_id)}
    return render(request, 'shop/coat.html', context)


def confirm_order(request):
    if request.method == 'POST':
        print(request.body.decode())
        return HttpResponse(status=200)
    return redirect('http://127.0.0.1:8000')


def handle_404(request):
    return redirect(request, 'shop/main.html')
