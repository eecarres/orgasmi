# Generated by Django 2.2.4 on 2019-09-04 10:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orgasmi_backend', '0002_auto_20190904_0648'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('abbreviation', models.CharField(max_length=3, unique=True)),
                ('name', models.CharField(max_length=20, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='service',
            name='price',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='professional',
            name='brands',
            field=models.ManyToManyField(blank=True, related_name='professional_brands', to='orgasmi_backend.Brand'),
        ),
        migrations.AddField(
            model_name='professional',
            name='languages',
            field=models.ManyToManyField(blank=True, related_name='professional_languages', to='orgasmi_backend.Language'),
        ),
        migrations.AddField(
            model_name='user',
            name='language',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='orgasmi_backend.Language'),
        ),
    ]
