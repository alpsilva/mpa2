from traceback import print_exc
from fastapi import UploadFile, APIRouter

from .config import get_core

router = APIRouter(
    prefix="/bob/api", #rota a ser definida pelo
    tags=['read file'],
    responses={404: {"Bob: read file": "Not found"}}
)

@router.post("/upload")
async def upload_csv(file: UploadFile):
    try:
        r = get_core().read_csv(file.file)
    except:
        print_exc()
        r = {}
    return r

@router.post("/LocalCsv")
async def upload_csv():
    try:
        file_path = "./internal/log_teste.csv"
        file = open(file_path)
        r = get_core().read_csv(file)
        file.close()
    except:
        print_exc()
        r = {}
    return r