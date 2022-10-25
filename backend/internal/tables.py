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
    response = []
    temp = [] 
    temp2 = {}
    for trace in log: 
        eventos = {} 
        for event in trace: 
            tarefa = event['tarefa'] 
            duracao = event['dt_fim'] - event['dt_inicio']    
            if(tarefa not in eventos):                   
                eventos[tarefa] = { 
                    'nome_atividade': tarefa, 
                    'quantidade': 0, 
                    'tempo': timedelta(0),
                } 
            eventos[tarefa]['quantidade'] += 1 
            eventos[tarefa]['tempo'] += duracao

        temp.append(eventos)

    for resp in temp:
        for key in resp.keys():                   
            if(key not in temp2): 
                temp2[key] = { 
                    'nome_atividade': key, 
                    'quantidade': [], 
                    'tempo': [],
                    'totalTempo': timedelta(0)
                } 
            temp2[key]['quantidade'].append(resp[key]['quantidade'])
            temp2[key]['tempo'].append(resp[key]['tempo'])
            temp2[key]['totalTempo'] += resp[key]['tempo']

    for item in temp2:
        temp2[item]['medianaQuant'] = statistics.median(temp2[item]['quantidade'])
        temp2[item]['minQuant'] = min(temp2[item]['quantidade'])
        temp2[item]['maxQuant'] = max(temp2[item]['quantidade'])
        temp2[item]['totalQuant'] = sum(temp2[item]['quantidade'])
        temp2[item]['avgQuant'] = temp2[item]['totalQuant']/len(temp2[item]['quantidade'])
        temp2[item]['medianaTempo'] = statistics.median(temp2[item]['tempo'])
        temp2[item]['minTempo'] = min(temp2[item]['tempo'])
        temp2[item]['maxTempo'] = max(temp2[item]['tempo'])
        temp2[item]['avgTempo'] = temp2[item]['totalTempo']/len(temp2[item]['tempo'])        
        temp2[item].pop('quantidade', None)
        temp2[item].pop('tempo', None)
        response.append(temp2[item])
       
    return response
