import pandas as pd
import pm4py

LOGS = None

def read_logs(file):
    global LOGS
    print(type(LOGS))
    df = pd.read_csv(file) 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")    
    LOGS = pm4py.convert_to_event_log(df)

def get_logs():
    return LOGS