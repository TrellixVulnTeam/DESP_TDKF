# Generated by Django 3.1 on 2020-08-10 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0010_auto_20200810_1409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablequestioncontent',
            name='table_question_content_col_question_type',
            field=models.CharField(db_column='Table_Question_Content_col_Question_type', max_length=256, null=True),
        ),
    ]
