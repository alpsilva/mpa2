from fastapi import FastAPI
from routers.api import router as api_routers

app = FastAPI()
app.include_router(api_routers) ## Include Routers

@app.get("/")
async def root():
    return {"Bob the Process Constructor": "API da equipe de backend 2 para a disciplina de Mineração de Processos"}