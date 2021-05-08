FROM python:3.8.0-buster
ENV PYTHONUNBUFFERED 1
RUN mkdir api

WORKDIR /api/

ADD requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt