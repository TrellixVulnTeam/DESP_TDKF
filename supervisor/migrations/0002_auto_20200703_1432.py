# Generated by Django 3.0.5 on 2020-07-03 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supervisor', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tableorganization',
            name='table_organization_col_name',
            field=models.CharField(db_column='Table_Organization_col_Name', max_length=100, unique=True),
        ),
    ]
