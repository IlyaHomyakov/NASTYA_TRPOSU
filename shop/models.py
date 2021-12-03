from django.db import models


class Coat(models.Model):
    class Sex(models.TextChoices):
        male = 'Муж'
        female = 'Жен'

    class Meta:
        verbose_name = 'Пальто'
        verbose_name_plural = 'Пальто'

    title = models.CharField(max_length=255, unique=True, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    composition = models.TextField(verbose_name='Состав')
    price = models.FloatField(verbose_name='Стоимость')
    sex = models.CharField(choices=Sex.choices, max_length=3, verbose_name='Пол')
    image = models.ImageField(null=True, verbose_name='Изображение')
    available_size = models.ManyToManyField('CoatSize', verbose_name='Доступные размеры')

    def __str__(self):
        return f'{self.title} — {self.sex} — {self.price}BYN'


class CoatSize(models.Model):
    class Size(models.TextChoices):
        XS = 'XS'
        S = 'S'
        M = 'M'
        L = 'L'
        XL = 'XL'
        XXL = 'XXL'

    size = models.CharField(choices=Size.choices, max_length=3)

    def __str__(self):
        return self.size


class Order(models.Model):

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Создан в')
    customer = models.CharField(max_length=255, verbose_name='Заказчик')
    customer_phone = models.CharField(max_length=255, verbose_name='Телефон заказчика')
    item = models.TextField(verbose_name='Заказанные товары')

    def __str__(self):
        return f'Заказ от {self.customer} — телефон {self.customer_phone}'

