from fastapi import APIRouter
from routers import exemplo_besta
from routers import read_file

router = APIRouter()

router.include_router(exemplo_besta.router)
router.include_router(read_file.router)