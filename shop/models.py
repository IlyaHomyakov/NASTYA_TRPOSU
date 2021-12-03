from django.db import models


class Coat(models.Model):
    class Sex(models.TextChoices):
        male = 'Муж'
        female = 'Жен'

    title = models.CharField(max_length=255)
    description = models.TextField()
    composition = models.TextField()
    price = models.FloatField()
    sex = models.CharField(choices=Sex.choices, max_length=3)
    image = models.ImageField(null=True)
    available_size = models.ManyToManyField('CoatSize')

    def __str__(self):
        return f'{self.title} — {self.sex} — {self.available_size.filter(coat__title=self.title).values("size")} — {self.price}BYN'


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
    created_at = models.DateTimeField(auto_now_add=True)
    customer = models.CharField(max_length=255)
    customer_phone = models.CharField(max_length=255)
    item = models.TextField()

