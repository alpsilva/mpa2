from multiprocessing import Event
import pandas as pd
import pm4py

def read_logs(file):
    columns_to_datetime = ['dt_inicio', 'dt_fim']
    df = pd.read_csv(file, encoding = "utf-8", parse_dates=columns_to_datetime)
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")
    df = df.rename(columns={"cliente": "case:cliente"})    
    logs = pm4py.convert_to_event_log(df)

    return logs

def read_local_logs():
    global LOGS
    file = open("./internal/log_teste.csv", 'r')
    df = pd.read_csv(file)
    file.close() 
    df = pm4py.format_dataframe(df, case_id="demanda_id", activity_key="tarefa", timestamp_key="dt_inicio")    
    LOGS = pm4py.convert_to_event_log(df)

