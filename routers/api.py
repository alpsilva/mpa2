from fastapi import APIRouter
from routers import exemplo_besta

router = APIRouter()

router.include_router(exemplo_besta.router)