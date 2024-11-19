# Modelos
```python
    class Echo(models.Model):
        content = models.TextField(default='', blank=True)
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #Así definimos las FK

        def __str__(self):
            return self.content

        def get_absolute_url(self):
            return reverse('echos:echos-detail', kwargs={'pk': self.pk})


        class Meta:
             ordering = ['-created_at']

 ```


    - Para poner la clase anterior como una FK en otro modelo y estén enlazados los hacemos de la siguiente forma:

    ```python
        from django.conf import settings
    from django.db import models


    # Create your models here.
    class Wave(models.Model):
        content = models.TextField(blank=False)
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
        echo = models.ForeignKey('echos.Echo', related_name='waves', on_delete=models.CASCADE) # ASI, no olvidar nunca del related name
        user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user_wave', on_delete=models.CASCADE)

        def __str__(self):
            return self.content[:50] + "..." if len(self.content) > 50 else self.content

        class Meta:
            ordering = ['created_at']
    ```