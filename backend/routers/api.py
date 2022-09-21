from fastapi import APIRouter
from routers import read_file
from routers import filters
from routers import tables

router = APIRouter()

router.include_router(read_file.router)
router.include_router(filters.router)
router.include_router(tables.router)