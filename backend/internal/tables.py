from datetime import timedelta
import pm4py

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
    response = [] 
    atividade = {} 
    for trace in log: 
      obj = {} 
      obj ['cliente'] = trace.attributes['cliente'] 
      obj ['case_id'] = trace.attributes['concept:name'] 
      for event in trace: 
        tarefa = event['tarefa'] 
        if(tarefa not in atividade): 
          atividade[tarefa] = { 
            'nome_atividade': tarefa, 
            'primeira_ocorrencia': event['dt_inicio'], 
            'quantidade': 0, 
            'tempo': timedelta(0) 
          } 
        atividade[tarefa]['quantidade'] += 1 
        atividade[tarefa]['tempo'] += event['dt_fim'] - event['dt_inicio'] 
      
        atividade[tarefa]['media'] = 0
        if atividade[tarefa]['quantidade'] > 0:
          atividade[tarefa]['media'] = atividade[tarefa]['tempo'] / atividade[tarefa]['quantidade']

    print('end')
    return atividade