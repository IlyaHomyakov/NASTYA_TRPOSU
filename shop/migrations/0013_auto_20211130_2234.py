# Generated by Django 3.2.9 on 2021-11-30 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0012_auto_20211130_2233'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coat',
            name='available_size',
        ),
        migrations.AddField(
            model_name='coat',
            name='available_size',
            field=models.ManyToManyField(to='shop.CoatSize'),
        ),
    ]
