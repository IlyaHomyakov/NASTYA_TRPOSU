from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Coat, Order
from django.shortcuts import get_object_or_404
import json


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
        request_body = request.body.decode()
        request_body_json = json.loads(request_body)
        coats_from_json = request_body_json['cart']
        actual_coats = []
        order_string = ''
        for coat_from_json in coats_from_json:
            if coat_from_json['quantity'] != 0:
                actual_coats.append(coat_from_json)

        print(actual_coats)

        for actual_coat in actual_coats:
            actual_coat_id = actual_coat["id"]
            got_coat_title = get_object_or_404(Coat, pk=actual_coat_id).title
            got_coat_sex = get_object_or_404(Coat, pk=actual_coat_id).sex
            order_string += f'Пальто {got_coat_title} — ({got_coat_sex}) — {actual_coat["quantity"]}шт.' \
                            f'— размер {actual_coat["size"]}\n'

        Order.objects.create(customer=request_body_json['customer']['name'],
                             customer_phone=request_body_json['customer']['phone'],
                             item=order_string)

        return HttpResponse(status=200)

    return redirect('http://127.0.0.1:8000')


def handle_404(request):
    return redirect(request, 'shop/main.html')
