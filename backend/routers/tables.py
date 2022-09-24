from fastapi import APIRouter

from internal.tables import listar_demanda

from internal.read_file import get_logs

router = APIRouter(
    prefix="/bob/tables", #rota a ser definida pelo
    tags=['tables'],
    responses={404: {"Bob: exemplo": "Not found"}}
)

@router.get("/demanda")
async def filter_by_client():   
    log = get_logs()

    table = listar_demanda(log)

    ordered_table = sorted(table, key = lambda d: d['duracao_total'], reverse=True)

    return ordered_table


