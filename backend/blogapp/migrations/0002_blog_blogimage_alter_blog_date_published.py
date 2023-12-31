# Generated by Django 4.2.4 on 2023-08-22 07:04

import blogapp.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='blogImage',
            field=models.ImageField(default='blogs/default.png', upload_to=blogapp.models.upload_to, verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='date_published',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 22, 7, 4, 23, 745224, tzinfo=datetime.timezone.utc)),
        ),
    ]
