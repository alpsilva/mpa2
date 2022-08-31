from fastapi import APIRouter
from pydantic import BaseModel

from pm4py.objects.log.obj import EventLog

from internal.exemplo_besta import exemplo
from internal.filters import filter_log_by_demand

from internal.read_file import get_logs

router = APIRouter(
    prefix="/bob/filter", #rota a ser definida pelo
    tags=['filter'],
    responses={404: {"Bob: exemplo": "Not found"}}
)

class ExampleInput(BaseModel):
    a: int
    b: int

class ExampleOutput(BaseModel):
    c: int

class FilterDemandInput(BaseModel):
    demand_type: str

class FilterDemandOutput(BaseModel):
    filter_status: bool

@router.post("/demand/", response_model=FilterDemandOutput)
async def filter_by_demand(request: FilterDemandInput):

    log = get_logs()

    r = filter_log_by_demand(log, request.demand_type)
    status = False
    if type(r) == EventLog:
        status = True
    return FilterDemandOutput(filter_status = status)