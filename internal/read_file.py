import pandas as pd
import pm4py
import copy

LOGS = None

def read_logs(file):
    global LOGS
    print(type(LOGS))
    df = pd.read_csv(file) 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")
    df = df.rename(columns={"cliente": "case:cliente"})    
    LOGS = pm4py.convert_to_event_log(df)

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