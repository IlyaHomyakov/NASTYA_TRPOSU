# Generated by Django 3.2.9 on 2021-11-30 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0007_coat_available_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='item',
            field=models.ManyToManyField(to='shop.Coat'),
        ),
    ]