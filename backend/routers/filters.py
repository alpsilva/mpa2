import datetime
from fastapi import APIRouter
from pydantic import BaseModel
import pm4py
from pm4py.objects.log.obj import EventLog

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda, get_demandas

from internal.read_file import get_logs, save_log, save_filtered_log

router = APIRouter(
    prefix="/bob/filter", #rota a ser definida pelo
    tags=['filter'],
    responses={404: {"Bob: exemplo": "Not found"}}
)
class FilterInput(BaseModel):
    input: str

@router.post("/client")
async def filter_by_client(request: FilterInput):   
    filtered_log = []
    log = get_logs()

    for trace in log:
        cliente = trace.attributes['cliente']
        if cliente == request.input:
            filtered_log.append(trace)
    # se não retornar valor vai default      
    if (len(filtered_log) < 1):
        filtered_log = []
        request.input = get_standard_client(log)
        for trace in log:
            cliente = trace.attributes['cliente']
            if cliente == request.input:
                filtered_log.append(trace)

    save_filtered_log(filtered_log)
    return len(filtered_log)


@router.post("/demanda")
async def filter_by_demanda(request: FilterInput):   
    log = get_logs()
    
    if request.input in get_demandas(log):
        filtered_log = pm4py.filter_event_attribute_values(log, "tp_demanda", [request.input], level="event", retain=True)
        
        save_filtered_log(filtered_log)
        return len(filtered_log)
    else:
        request.input = get_standard_demanda(log)
        filtered_log = pm4py.filter_event_attribute_values(log, "tp_demanda", [request.input], level="event", retain=True)
        
        save_filtered_log(filtered_log)
        return len(filtered_log)
   
    

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
