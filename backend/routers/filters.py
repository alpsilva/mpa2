from datetime import datetime
from fastapi import APIRouter, status
from pydantic import BaseModel
import pm4py
from pm4py.objects.log.obj import EventLog

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda, get_demandas

from internal.read_file import get_logs, save_log, save_filtered_log, filter_log

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

@router.post("/client")
async def filter_by_client(request: FilterInput):  
    cliente_filter = request.input
    
    log = get_logs()

    output = filter_log(log, cliente_filter=cliente_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output

@router.post("/demanda")
async def filter_by_demanda(request: FilterInput):   
    demanda_filter = request.input
    
    log = get_logs()

    output = filter_log(log, demanda_filter=demanda_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        status.HTTP_404_NOT_FOUND

    return output

@router.post("/data")
async def filter_by_data(request: FilterDateInput):    
    start_date = request.dataInicial
    end_date = request.dataFinal

    print(end_date, start_date)

    ano = datetime.today().year
    if (start_date == ""):        
        start_date = datetime(ano, 1, 1)
    else:
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
    
    if (end_date == ""):
        end_date = datetime(ano, 12, 31)
    else:
        end_date = datetime.strptime(end_date, '%Y-%m-%d')
    
    print(end_date, start_date)

    log = get_logs()
    filtered_log = []    

    for trace in log:
        date_last_event = (trace[-1])["dt_fim"]
        date_last_event = date_last_event.to_pydatetime()
        if( start_date < date_last_event < end_date):
            filtered_log.append(trace)
    if (len(filtered_log) < 1):
        return len(log)

    save_filtered_log(filtered_log)

    return len(filtered_log)
