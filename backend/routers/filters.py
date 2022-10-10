from datetime import datetime
from fastapi import APIRouter, status
from pydantic import BaseModel

from .config import get_core

router = APIRouter(
    prefix="/bob/filter", #rota a ser definida pelo
    tags=['filter'],
    responses={404: {"Bob: exemplo": "Not found"}}
)
class FilterInput(BaseModel):
    input: str

class FilterDateInput(BaseModel):
    dataInicial: str
    dataFinal: str


class NewFilterInput(BaseModel):
    cliente: str
    demanda: str
    dataInicial: str
    dataFinal: str
    caminhos: int
    
@router.post("/")
async def filter(request: NewFilterInput):
    cliente = request.cliente
    demanda = request.demanda
    start_date = request.dataInicial
    end_date = request.dataFinal
    caminhos = request.caminhos

    ano = datetime.today().year
    if (start_date == ""):        
        start_date = datetime(ano, 1, 1)
    else:
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
    
    if (end_date == ""):
        end_date = datetime(ano, 12, 31)
    else:
        end_date = datetime.strptime(end_date, '%Y-%m-%d')


    output = get_core().filter_saved_log(cliente_filter=cliente, caminhos=caminhos, demanda_filter=demanda,start_date=start_date, end_date=end_date)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output

@router.post("/client")
async def filter_by_client(request: FilterInput):  
    cliente_filter = request.input
    
    output = get_core().filter_saved_log(cliente_filter=cliente_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output

@router.post("/demanda")
async def filter_by_demanda(request: FilterInput):   
    demanda_filter = request.input
    
    output = get_core().filter_saved_log(demanda_filter=demanda_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output

@router.post("/data")
async def filter_by_data(request: FilterDateInput):    
    start_date = request.dataInicial
    end_date = request.dataFinal
    
    ano = datetime.today().year
    if (start_date == ""):        
        start_date = datetime(ano, 1, 1)
    else:
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
    
    if (end_date == ""):
        end_date = datetime(ano, 12, 31)
    else:
        end_date = datetime.strptime(end_date, '%Y-%m-%d')
    
    output = get_core().filter_saved_log(start_date=start_date, end_date=end_date)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output
