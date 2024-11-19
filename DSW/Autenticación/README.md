## URLS LOGIN, LOGOUT, SIGNUP:

```python
    path('', lambda request: redirect('echos:echo-list'), name='home')
    path('login/', accounts.views.user_login, name='login'),
    path('logout/', accounts.views.user_logout, name='logout'),
    path('signup/', accounts.views.user_signup, name='signup'), 
      + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```


## LOGIN, LOGOUT, SIGNUP:

- Posibles imports:

```python
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render
from django.urls import reverse

from users.models import Profile
from .forms import LoginForm, SignupForm
```


- Vistas de login:

```python
def user_login(request):
    FALLBACK_REDIRECT = reverse('echos:echo-list') # para redirigir donde quieras

    if request.user.is_authenticated:
        return redirect(FALLBACK_REDIRECT)
    login_error = False
    if request.method == 'POST':
        next = request.POST.get('next')
        form = LoginForm(request.POST)
        username = form.data['username']
        password = form.data['password']
        if user := authenticate(request, username=username, password=password):
            login(request, user)
            return redirect(next)
        else:
            form = LoginForm()
            login_error = True
    else:
        next = request.GET.get('next', FALLBACK_REDIRECT)
        form = LoginForm()
    return render(
        request,
        'accounts/login.html',
        dict(
            form=form,
            next=next,
            login_error=login_error,
        ),
    )
```

- Vistas signup:

```python
def user_signup(request):
    if request.method == 'POST':
        if (form := SignupForm(request.POST)).is_valid():
            
            user = form.save()
            profile = Profile(user=user)
            profile.save()

            login(request, user)

            return redirect('echos:echo-list')
    else:
        form = SignupForm()
    return render(request, 'accounts/signup.html', dict(form=form))
```


- Vista de logout 

```python
def user_logout(request):
    logout(request)

    return redirect('echos:echo-list')
```


## Forms necesarios de login y signup


- LoginForm

```python
class LoginForm(forms.Form):
    username = forms.SlugField(max_length=64, required=True)
    password = forms.CharField(max_length=64, required=True, widget=forms.PasswordInput)
```

- SignupForm

```python
from django import forms
from django.contrib.auth import get_user_model

class SignupForm(forms.ModelForm):
    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'first_name', 'last_name', 'email')
        widgets = dict(password=forms.PasswordInput)
        help_texts = dict(username=None)

    def save(self, *args, **kwargs):
        user = super().save(commit=False)

        user.set_password(self.cleaned_data['password'])

        user = super().save(*args, **kwargs)

        return user
```


## PLANTILLAS Básicas

- Login

```python
{% if login_error %}
  <p>Incorrect username or password.</p>
{% endif %}
<form method="post" action="{% url 'login' %}">
  {% csrf_token %}
  {{ form }}
  <input type="hidden" name="next" value="{{ next }}">
  <input type="submit" value="Login">
</form>
¿No tienes cuenta? <a href="{% url 'signup' %}">Create una</a>
```

- Signup

```python
<form method="post" action="{% url 'signup' %}">
  {% csrf_token %}
  {{ form }}
  <input type="submit" value="Sign up">
</form>
```