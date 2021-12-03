# Generated by Django 3.2.9 on 2021-11-30 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('composition', models.TextField(max_length=255)),
                ('price', models.FloatField()),
                ('size', models.CharField(choices=[('М', 'Male'), ('Ж', 'Female')], max_length=1)),
            ],
        ),
    ]