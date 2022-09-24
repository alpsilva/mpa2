from pm4py.objects.log.obj import EventLog
import copy

class LogCache:
    def __init__(self):
        self.log = None
        self.filtered_log = None
    
    def get_log(self):
        return copy.deepcopy(self.log)

    def save_log(self, log: EventLog):
        self.log = copy.deepcopy(log)

    def get_filtered_log(self):
        return copy.deepcopy(self.filtered_log)

    def save_filtered_log(self, log: EventLog):
        self.filtered_log = copy.deepcopy(log)