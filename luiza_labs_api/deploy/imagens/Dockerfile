FROM python:3.9.13-slim-bullseye

ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV PYTHONUNBUFFERED 1
ENV TZ="America/Sao_Paulo"

WORKDIR /app

RUN apt-get update && \
  apt-get install --no-install-recommends -y gcc && \
  apt-get clean && rm -rf /var/lib/apt/lists/* && \
  pip3 install --no-cache-dir --upgrade pipenv pip && \
  rm -rf /root/.cache/*

ADD /app /app

RUN pipenv install --three && \
  rm -rf /root/.cache/*
