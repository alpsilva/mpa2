import datetime
from fastapi import APIRouter
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

@router.post("/client")
async def filter_by_client(request: FilterInput):  
    cliente_filter = request.input
    print(cliente_filter)
    
    log = get_logs()

    output = filter_log(log, cliente_filter=cliente_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        # abort 404

    return output

@router.post("/demanda")
async def filter_by_demanda(request: FilterInput):   
    demanda_filter = request.input
    print(demanda_filter)
    
    log = get_logs()

    output = filter_log(log, demanda_filter=demanda_filter)
    log_size = output['detalhes']['logSize']

    if log_size == 0:
        print("log size 0.")
        # abort 404

    return output

@router.post("/data")
async def filter_by_data(dataInicial = "", dataFinal = ""):    
    log = get_logs()
    ano = datetime.date.today().year
    if (dataInicial == ""):        
        dataInicial = datetime.date(ano, 1, 1)
    else:
        dataInicial = datetime.datetime.strptime(dataInicial, '%m-%d-%Y').date()
    if (dataFinal == ""):
        dataFinal = datetime.date(ano, 12, 31)
    else:
        dataFinal = datetime.datetime.strptime(dataFinal, '%m-%d-%Y').date()
    filtered_log = []    
    print(dataFinal, dataInicial)
    for trace in log:
        date_last_event = (trace[-1])["dt_fim"].date()    
        if( dataInicial < date_last_event < dataFinal):
            filtered_log.append(trace)
    if (len(filtered_log) < 1):
        return len(log)

    save_filtered_log(filtered_log)

    return len(filtered_log)
