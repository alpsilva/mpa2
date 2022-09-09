from fastapi import FastAPI
from routers.api import router as api_routers
from internal.read_file import get_logs
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/")
async def root():
    return {"Bob the Process Constructor": "API da equipe de backend 2 para a disciplina de Mineração de Processos"}

@app.get("/checkFile")
async def checking():
    print(type(get_logs()))
    return {"Bob the Process Constructor": str(type(get_logs()))}