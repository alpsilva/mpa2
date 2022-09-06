import pandas as pd
import pm4py
import copy

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda, get_demandas, filter_log_by_cliente

LOGS = None
FILTERED_LOG = None

def read_logs(file):
    global LOGS
    global FILTERED_LOG

    df = pd.read_csv(file) 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")
    df = df.rename(columns={"cliente": "case:cliente"})    
    LOGS = pm4py.convert_to_event_log(df)
    print("Tamanho do log original:", len(LOGS))

    default_cliente = get_standard_client(LOGS)
    default_demanda = get_standard_demanda(LOGS)

    print("Cliente padrão:", default_cliente)
    print("Demanda padrão:", default_demanda)

    FILTERED_LOG = filter_log_by_cliente(LOGS, default_cliente)
    print("Log filtrado (cliente):", len(FILTERED_LOG))

    FILTERED_LOG = filter_log_by_demand(FILTERED_LOG, default_demanda)
    print("Log filtrado (demanda):", len(FILTERED_LOG))

    return {
        "cliente": default_cliente,
        "demanda": default_demanda,
        "logSize": len(FILTERED_LOG)
    }


def read_local_logs():
    global LOGS
    print(type(LOGS))
    file = open("./internal/log_teste.csv", 'r')
    df = pd.read_csv(file)
    file.close() 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")    
    LOGS = pm4py.convert_to_event_log(df)

def get_logs():
    return copy.deepcopy(LOGS)