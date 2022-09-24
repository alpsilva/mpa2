from datetime import datetime

from .read_file import read_logs
from .filters import  filter_log, get_standard_client, get_standard_demanda
from .tables import listar_demanda, listar_atividades

from .log_cache import LogCache

class Core:
    def __init__(self):
        self.log_cache = LogCache()

    def read_csv(self, file):
        log = read_logs(file)
        self.log_cache.save_log(log)

        default_cliente = get_standard_client(log)
        default_demanda = get_standard_demanda(log)

        filtered_log, output = filter_log(log, default_cliente, default_demanda)

        self.log_cache.save_filtered_log(filtered_log)

        return output

    def filter_saved_log(self, cliente_filter: str = None, demanda_filter: str = None,
                    start_date: datetime = None, end_date: datetime = None):
        log = self.log_cache.get_log()

        if demanda_filter == "manutencaoEvolutiva": demanda_filter = "evolutiva"
        if demanda_filter == "novoSistema": demanda_filter = "novo"

        filtered_log, output = filter_log(log, cliente_filter, demanda_filter, start_date, end_date)

        self.log_cache.save_filtered_log(filtered_log)

        return output

    def get_demandas_table(self):
        filtered_log = self.log_cache.get_filtered_log()
        table = listar_demanda(filtered_log)

        return table

    def get_atividades_table(self):
        filtered_log = self.log_cache.get_filtered_log()
        table = listar_atividades(filtered_log)

        return table
