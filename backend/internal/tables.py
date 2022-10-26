from datetime import timedelta
import pm4py
import statistics

def listar_demanda(log): 
    response = [] 
    for trace in log: 
      obj = {} 
      obj ['cliente'] = trace.attributes['cliente'] 
      obj ['case_id'] = trace.attributes['concept:name'] 
      eventos = {} 
      for event in trace: 
        tarefa = event['tarefa'] 
        if(tarefa not in eventos): 
          eventos[tarefa] = { 
            'nome_atividade': tarefa, 
            'primeira_ocorrencia': event['dt_inicio'], 
            'quantidade': 0, 
            'tempo': timedelta(0) 
          } 
        eventos[tarefa]['quantidade'] += 1 
        eventos[tarefa]['tempo'] += event['dt_fim'] - event['dt_inicio'] 
      
        eventos[tarefa]['media'] = 0
        if eventos[tarefa]['quantidade'] > 0:
          eventos[tarefa]['media'] = eventos[tarefa]['tempo'] / eventos[tarefa]['quantidade']
    
      obj ['atividades'] = list(eventos.values()) 

      response.append(obj)

      for item in response:
        total_duration = []
        for tarefa in item['atividades']:
            total_duration.append(
                tarefa['tempo']
            )

        total = 0
        for duration in total_duration:
            total += duration.total_seconds()

        item['duracao_total'] = total

    return response

def listar_atividades(log):
  response = {}

  for trace in log:
    for activity in trace:
      act_name = activity['concept:name']
      duration = activity['dt_fim'] - activity['dt_inicio']
      
      if act_name not in response:
        response[act_name] = {
          "activity": act_name,
          "quantity": 0,
          "minDuration": duration,
          "maxDuration": duration,
          "accumulatedDuration": 0,
          'avgDuration': 0
        }
      
      response[act_name]['quantity'] += 1
      if duration > response[act_name]['maxDuration']:
        response[act_name]['maxDuration'] = duration
      if duration < response[act_name]['minDuration']:
        response[act_name]['minDuration'] = duration
      response[act_name]['accumulatedDuration'] += duration.total_seconds()
  
  for key in response:
    if response[key]['quantity'] > 0:
      response[key]['avgDuration'] = (
        response[key]['accumulatedDuration'] / response[key]['quantity']
      )
      
  return list(response.values())
