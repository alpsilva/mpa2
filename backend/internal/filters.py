import pm4py
from pm4py.objects.log.obj import EventLog
from .stats import get_log_statistics
from .visualization import generate_svg

from datetime import datetime

def filter_log_by_demand(log: EventLog, demand_type: str):
    filtered_log = pm4py.filter_event_attribute_values(log, "tp_demanda", [demand_type], level="case", retain=True)
    return filtered_log

def filter_log_by_cliente(log: EventLog, cliente_filter: str):
    filtered_log = EventLog()
    # filtered_log.attributes = log.attributes
    for trace in log:
        cliente = trace.attributes['cliente']
        if cliente == cliente_filter:
            filtered_log.append(trace)
    return filtered_log

def filter_log_by_data(log: EventLog, start_date: datetime, end_date: datetime):
    filtered_log = EventLog()
    
    for trace in log:
        date_last_event = (trace[-1])["dt_fim"]
        if( start_date < date_last_event < end_date):
            filtered_log.append(trace)
    if (len(filtered_log) < 1):
        return len(log)

    return filtered_log

def filter_log(log: EventLog, cliente_filter: str = None, demanda_filter: str = None,
                start_date: datetime = None, end_date: datetime = None):
    
    if start_date is not None and end_date is not None:
        log = filter_log_by_data(log, start_date, end_date)
    
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
    
    output = {
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

    return log, output

def filter_to_simplified_log(log, level, by_top=True):
    """
    Simplifies a log by taking out unpopular variantes.

    Parameters:
        log    (pm4py.objects.log) : Log
        level  (int)               : 3,5,7,9 or 12; 3 "muito baixo"; 12 "muito alto"
                                     in the case of by_top=False, percentage
        by_top (bool)              : If the filtering will be by the top apearances 
                                     instead of percentage cut
    Returns:
        filtered_log  (pm4py.objects.log) : Simplified log
    """
    # Filtering by top k apearences (default)
    if by_top:
        filtered_log = pm4py.filter_variants_top_k(log, level)
        return filtered_log
    # Filter by percentage 
    filtered_log = pm4py.filter_variants_by_coverage_percentage(log, level)
    return filtered_log

def get_standard_client(log):
    clientes_count = {}
    for trace in log:
        cliente = trace.attributes['cliente']
        if cliente not in clientes_count:
            clientes_count[cliente] = 0
        clientes_count[cliente] += 1
    max_key = max(clientes_count, key = clientes_count.get)
    return max_key

def get_standard_demanda(log):
    demandas = pm4py.get_event_attribute_values(log, "tp_demanda")
    max_key = max(demandas, key = demandas.get)
    return max_key

def get_demandas(log):
    demandas = pm4py.get_event_attribute_values(log, "tp_demanda")
    return demandas

