FROM python:3.9

WORKDIR /mpa2
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "uvicorn", "bob_api:app", "--host", "0.0.0.0", "--port", "8081", "--workers", "5"]