# Generated by Django 3.2.9 on 2021-11-30 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_remove_coat_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coat',
            name='composition',
            field=models.TextField(),
        ),
    ]
