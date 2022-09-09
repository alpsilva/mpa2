FROM python:3.9

RUN apt-get update && \
    apt-get clean;
RUN apt-get -y install sudo && \
    sudo apt-get -y install graphviz
WORKDIR /mpa2
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "uvicorn", "bob_api:app", "--reload", "--host", "0.0.0.0", "--port", "8081", "--workers", "5"]