from django.contrib import admin
from .models import Item

# Register your models here.

class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'first_name', 'middle_name', 'last_name', 'name_ext', 'email', 'phone',
        'employment_status', 'date_of_birth', 'place_of_birth', 'sex', 'civil_status',
        'citizenship', 'house_no', 'street', 'subd', 'brgy', 'city', 'province', 'zipcode', 
        'father_surname', 'father_first_name', 'father_middle_name', 'father_name_ext',
        'mother_surname', 'mother_first_name', 'mother_middle_name', 'elementary',
        'secondary', 'vocational_tradecourse', 'college'
    )
    search_fields = ('first_name', 'last_name', 'email', 'city', 'province')
    list_filter = ('first_name', 'last_name', 'email', 'city', 'province')

admin.site.register(Item, ItemAdmin)