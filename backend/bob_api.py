from fastapi import FastAPI
from routers.api import router as api_routers
from fastapi.middleware.cors import CORSMiddleware
from routers import get_core

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(api_routers) ## Include Routers
core = get_core()

@app.get("/")
async def root():
    return {"Bob the Process Constructor": "API da equipe de backend 2 para a disciplina de Mineração de Processos"}