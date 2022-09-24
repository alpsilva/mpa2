from fastapi import APIRouter
from .config import get_core

router = APIRouter(
    prefix="/bob/tables", #rota a ser definida pelo
    tags=['tables'],
    responses={404: {"Bob: exemplo": "Not found"}}
)

@router.get("/demanda")
async def filter_by_client():   
    table = get_core().get_demandas_table()

    ordered_table = sorted(table, key = lambda d: d['duracao_total'], reverse=True)

    return ordered_table
