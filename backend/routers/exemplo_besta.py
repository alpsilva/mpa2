from fastapi import APIRouter
from pydantic import BaseModel

from internal.exemplo_besta import exemplo

router = APIRouter(
    prefix="/bob/exemplo", #rota a ser definida pelo
    tags=['exemplo'],
    responses={404: {"Bob: exemplo": "Not found"}}
)

class ExampleInput(BaseModel):
    a: int
    b: int

class ExampleOutput(BaseModel):
    c: int

@router.post("/besta", response_model=ExampleOutput)
async def teste(request: ExampleInput):
    r = exemplo(request.a, request.b)

    return ExampleOutput(c = r)