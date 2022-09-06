from fastapi import APIRouter
from pydantic import BaseModel
import pm4py
from pm4py.objects.log.obj import EventLog

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda

from internal.read_file import get_logs

router = APIRouter(
    prefix="/bob/filter", #rota a ser definida pelo
    tags=['filter'],
    responses={404: {"Bob: exemplo": "Not found"}}
)

class FilterDemandInput(BaseModel):
    demand_type: str

class FilterDemandOutput(BaseModel):
    filter_status: bool

class FilterInput(BaseModel):
    input: str

@router.post("/demand/", response_model=FilterDemandOutput)
async def filter_by_demand(request: FilterDemandInput):

    log = get_logs()

    r = filter_log_by_demand(log, request.demand_type)
    status = False
    if type(r) == EventLog:
        status = True
    return FilterDemandOutput(filter_status = status)

@router.post("/client")
async def filter_by_client(request: FilterInput):   
    filtered_log = []
    log = get_logs()

    if (request.input == ""):
        request.input = get_standard_client(log)

    for trace in log:
        cliente = trace.attributes['cliente']
        if cliente == request.input:
            filtered_log.append(trace)
    # se não retornar valor vai default      
    if (len(filtered_log) < 1):
      return filter_by_client("")

    return filtered_log


@router.post("/demanda")
async def filter_by_demanda(request: FilterInput):   
    log = get_logs()

    if (request.input == ""):
        request.input = get_standard_demanda(log)

    filtered_log = pm4py.filter_event_attribute_values(log, "tp_demanda", [request.input], level="event", retain=True)
    # se não retornar valor vai default
    if (len(filtered_log) < 1):
      return filter_by_demanda("")

    return filtered_log


import datetime

@router.post("/data")
async def filter_by_data(dataInicial, dataFinal):    
    log = get_logs()
    if (dataInicial == "" and dataFinal == ""):
        ano = datetime.date.today().year
        dataInicial = datetime.date(ano, 1, 1)
        dataFinal = datetime.date(ano, 12, 31)
    if (dataInicial != ""):
        dataInicial = datetime.datetime.strptime(dataInicial, '%m-%d-%Y').date()
    if (dataFinal != ""):
        dataFinal = datetime.datetime.strptime(dataFinal, '%m-%d-%Y').date()
    filtered_log = []    

    for trace in log:
        date_last_event = (trace[-1])["dt_fim"].date()    
        if( dataInicial < date_last_event < dataFinal):
            filtered_log.append(trace)
    if (len(filtered_log) < 1):
      return log

    return filtered_log
