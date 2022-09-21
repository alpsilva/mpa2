from traceback import print_exc
from fastapi import UploadFile, APIRouter

from internal.read_file import read_logs, read_local_logs, get_logs
from internal import read_file

router = APIRouter(
    prefix="/bob/api", #rota a ser definida pelo
    tags=['read file'],
    responses={404: {"Bob: read file": "Not found"}}
)

@router.post("/upload")
async def upload_csv(file: UploadFile):
    try:
        r = read_logs(file.file)
    except:
        print_exc()
        r = {}
    return r

@router.post("/LocalCsv")
async def upload_csv():
    try:
        file_path = "./internal/log_teste.csv"
        file = open(file_path)
        r = read_logs(file)
        file.close()
    except:
        print_exc()
        r = {}
    return r

@router.get("/check")
async def check_logs(n: int):
    return get_logs()[n]