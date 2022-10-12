from traceback import print_exc
from fastapi import UploadFile, APIRouter
from pydantic import BaseModel

from .config import get_core

DEFAULT_CAMINHOS = 2

router = APIRouter(
    prefix="/bob/api", #rota a ser definida pelo
    tags=['read file'],
    responses={404: {"Bob: read file": "Not found"}}
)

@router.post("/upload")
async def upload_csv(file: UploadFile):
    try:
        r = get_core().read_csv(file.file, DEFAULT_CAMINHOS)
    except:
        print_exc()
        r = {}
    return r

@router.post("/LocalCsv")
async def upload_csv():
    try:
        file_path = "./internal/log_teste.csv"
        file = open(file_path)
        r = get_core().read_csv(file, DEFAULT_CAMINHOS)
        file.close()
    except:
        print_exc()
        r = {}
    return r