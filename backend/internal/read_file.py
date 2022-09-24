from multiprocessing import Event
import pandas as pd
import pm4py
import copy

from internal.filters import filter_log_by_demand, get_standard_client, get_standard_demanda, get_demandas, filter_log_by_cliente
from internal.visualization import generate_svg
from internal.stats import get_log_statistics

from pm4py.objects.log.log import EventLog

LOGS = None
FILTERED_LOG = None

def read_logs(file):
    global LOGS
    global FILTERED_LOG

    df = pd.read_csv(file) 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")
    df = df.rename(columns={"cliente": "case:cliente"})    
    LOGS = pm4py.convert_to_event_log(df)

    default_cliente = get_standard_client(LOGS)
    default_demanda = get_standard_demanda(LOGS)

    output = filter_log(LOGS, default_cliente, default_demanda)

    return output

def read_local_logs():
    global LOGS
    file = open("./internal/log_teste.csv", 'r')
    df = pd.read_csv(file)
    file.close() 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")    
    LOGS = pm4py.convert_to_event_log(df)

def filter_log(log: EventLog, cliente_filter: str = None, demanda_filter: str = None):
    if cliente_filter is not None:
        log = filter_log_by_cliente(log, cliente_filter)

    if demanda_filter is not None:
        log = filter_log_by_demand(log, demanda_filter)

    freq_dfg_file_path, perf_dfg_file_path = generate_svg(log)

    with open(freq_dfg_file_path, encoding='utf-8') as file:
        freq_dfg_str = "".join(file.read().splitlines())

    with open(perf_dfg_file_path, encoding='utf-8') as file:
        perf_dfg_str = "".join(file.read().splitlines())

    stats = get_log_statistics(log)

    save_filtered_log(log)

    return {
        "filters": {
            "cliente": cliente_filter,
            "demanda": demanda_filter,
            "exibicao": "frequencia"
        },

        "stats": stats,

        "detalhes": {
            "logSize": len(log)
        },

        "freq_svg": freq_dfg_str,
        "perf_svg": perf_dfg_str
    }

def get_logs():
    return copy.deepcopy(LOGS)

def save_log(log: EventLog):
    LOGS = copy.deepcopy(log)

def save_filtered_log(log: EventLog):
    FILTERED_LOG = copy.deepcopy(log)