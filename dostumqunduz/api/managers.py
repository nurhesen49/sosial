from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            return ValueError(_('Email is required'))

        email=self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('is_staff have to be True for superuser'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('is_superuser have to be True for superuser'))
        if extra_fields.get('is_active') is not True:
            raise ValueError(_('is_active have to be True for superuser'))
        return self.create_user(email, password, **extra_fields)
