import pm4py
from pm4py.objects.log.obj import EventLog

def filter_log_by_demand(log: EventLog, demand_type: str):
    filtered_log = pm4py.filter_event_attribute_values(log, "tp_demanda", [demand_type], level="case", retain=True)
    return filtered_log

# Filtro cliente
def get_standard_client(log):
    clientes_count = {}
    
    for trace in log:
        cliente = trace.attributes['cliente']
        if cliente not in clientes_count:
            clientes_count[cliente] = 0
        clientes_count[cliente] += 1
    max_key = max(clientes_count, key = clientes_count.get)
    return max_key

# filtro demanda

def get_standard_demanda(log):
    demandas = pm4py.get_event_attribute_values(log, "tp_demanda")
    max_key = max(demandas, key = demandas.get)
    return max_key