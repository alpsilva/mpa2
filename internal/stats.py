from multiprocessing import Event
from pm4py.objects.log.obj import EventLog

def get_log_statistics(eventlog: EventLog):
    """
    
    """
    demandas = len(eventlog) 
    durations = []
    atividades_list = []

    for trace in eventlog:
        trace_duration = 0
        atividades_list.append(len(trace))

        for activity in trace:
            activity_duration = activity['dt_fim'] - activity['dt_inicio']
            trace_duration += activity_duration

        durations.append(trace_duration)


    duracao = 0
    if len(durations) > 0:
        duracao = round(sum(durations) / len(durations), 2)
    
    average_atividades = 0
    if len(atividades_list) > 0:
        average_atividades = round(sum(atividades_list) / len(atividades_list), 2)
    

    return {
        "demandas": demandas,
        "atividades": sum(atividades_list),
        "duracao": duracao,
        "media": average_atividades
    }