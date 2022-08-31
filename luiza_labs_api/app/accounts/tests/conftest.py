import pytest


@pytest.fixture
def user_data():
    return {
        'name': 'Name Surname',
        'email': 'email@provider.com',
        'password': 'GoodP4ssw0rd!@#',
    }
