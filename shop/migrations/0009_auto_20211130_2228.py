# Generated by Django 3.2.9 on 2021-11-30 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_order_item'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='item',
        ),
        migrations.AddField(
            model_name='order',
            name='item',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
