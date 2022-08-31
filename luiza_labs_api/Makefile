install:
	cd app && pipenv install

dev-install:
	cd app && pipenv install --dev && pipenv run pre-commit install

shell:
	cd app && pipenv run python manage.py shell

dev-server-up:
	cd app && pipenv run python manage.py runserver 0:8000

local-migrate:
	docker-compose -f local.yml up migrations

local-stack-up:
	docker-compose -f local.yml up -d

local-stack-down:
	docker-compose -f local.yml down

postgres-up:
	docker-compose -f local.yml up postgres-local -d

postgres-down:
	docker container stop postgres-local

test:
	cd app && pipenv run pytest

test-coverage:
	cd app && pipenv run coverage erase
	rm -rf app/htmlcov
	cd app && pipenv run coverage run -m pytest
	cd app && pipenv run coverage html

superuser:
	cd app && python manage.py loaddata fixtures.json
