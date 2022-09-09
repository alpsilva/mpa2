import pandas as pd
import pm4py
import copy

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda, get_demandas, filter_log_by_cliente
from internal.visualization import generate_svg
from internal.stats import get_log_statistics

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

    freq_dfg_file_path, perf_dfg_file_path = generate_svg(FILTERED_LOG)

    with open(freq_dfg_file_path[1:], encoding='utf-8') as file:
        freq_dfg_str = "".join(file.read().splitlines())

    with open(perf_dfg_file_path[1:], encoding='utf-8') as file:
        perf_dfg_str = "".join(file.read().splitlines())

    stats = get_log_statistics(FILTERED_LOG)

    return {
        "filters": {
            "cliente": default_cliente,
            "demanda": default_demanda,
            "exibicao": "frequencia"
        },

        "stats": stats,

        "detalhes": {
            "logSize": len(FILTERED_LOG)
        },

        "freq_svg": freq_dfg_str,
        "perf_svg": perf_dfg_str
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