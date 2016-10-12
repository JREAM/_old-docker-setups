FROM python:alpine

ENV PORT 80

# Create Application Directory
WORKDIR /app/


# Bundle App Source
COPY . .

RUN pip install -r requirements.txt

EXPOSE 80


