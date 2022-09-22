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
      obj ['atividades'] = eventos 

      response.append(obj)

    return response

def listar_atividades(demand : pm4py.objects.log.obj.Event, order : bool = False):
    """
    Returns each unique activity in a demand and its # of ocurrences.

    Parameters:
        demand (pm4py.objects.log.obj.Event) : demand to be analysed
        order (bool) : if activities are ordered by # of ocurrences decreasing
    Returns:
        activities (dict) : dict with activities as key and its information as values
            inside of this dict we have:
            key: activity
            value:
                dict (activity)
                    keys :
                        - freq
                        - name
                        - first_occurrence 
                        - total_duration
                        - occurrences (list of dicts)
                            dict
                                - executor
                                - start
                                - finish
                                - duration
    """
    activities = {} # Dict onde as chaves sao nomes unicos de atividades de uma dada demanda
    for activity in demand:
        name = activity['tarefa'] # Tarefa diz o nome da atividade (basicamente o id)

        # Try except para checar se a tarefa já foi acrescentada como chave do dicionario
        try:
            # Somando a quantidade de ocorrencias e alterando a primeira ocorrencia registrada se for o caso
            activities[name]['freq'] += 1
            if activity['dt_inicio'] < activities[name]['first_occurrence']:
                activities[name]['first_occurrence'] = activity['dt_inicio']
        except:
            # Inicializando atividade, que tambem é um dict de informações
            activities[name] = {}
            activities[name]['freq'] = 1
            activities[name]['name'] = name
            activities[name]['first_occurrence'] = activity['dt_inicio']
            activities[name]['total_duration'] = timedelta(days=0)
            activities[name]['occurrences'] = []
        
        # Aqui temos o dicionario associado a cada ocorrencia
        ocur_info = {}
        ocur_info['executor'] = activity['cliente']                        # Quem fez
        ocur_info['start'] = activity['dt_inicio']                         # Inicio
        ocur_info['finish'] = activity['dt_fim']                           # Fim
        ocur_info['duration'] = activity['dt_fim'] - activity['dt_inicio'] # Duração
        # Ocurrences é um array de dicionários com as informações das ocorrências da atividade
        activities[name]['occurrences'].append(ocur_info)

        activities[name]['total_duration'] = activities[name]['total_duration'] + ocur_info['duration']
    
    if order:
        activities = {k : v for k, v in sorted(activities.items(), key=lambda item: item[1]['freq'], reverse=True)}

    return activities