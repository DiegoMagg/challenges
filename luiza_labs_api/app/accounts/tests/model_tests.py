import pytest

from accounts.models import User

pytestmark = pytest.mark.django_db


def test_user_model_must_create_a_user(user_data):
    user = User.objects.create_user(**user_data)
    assert user.is_staff is False
    assert user.is_superuser is False


def test_user_model_must_create_a_superuser(user_data):
    user = User.objects.create_superuser(**user_data)
    assert user.is_staff is True
    assert user.is_superuser is True
