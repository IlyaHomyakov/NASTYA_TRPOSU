# Generated by Django 3.2.9 on 2021-11-30 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0011_rename_created_order_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coat',
            name='available_size',
        ),
        migrations.AddField(
            model_name='coat',
            name='available_size',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shop.coatsize'),
        ),
    ]
