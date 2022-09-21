from datetime import timedelta 

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
      obj ['atividades'] = eventos 
      response.append(obj) 
    return response