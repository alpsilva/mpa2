import pm4py
from pm4py.objects.log.obj import EventLog


def generate_svg(eventlog: EventLog):
    frequency_dfg, start_activities, end_activities = pm4py.discover_dfg(eventlog)
    performance_dfg, start_activities, end_activities = pm4py.discover_performance_dfg(eventlog)

    freq_dfg_file_path = '../sample_graphs/freq_dfg.svg'
    perf_dfg_file_path = '../sample_graphs/perf_dfg.svg'

    pm4py.save_vis_dfg(frequency_dfg, start_activities, end_activities, '../sample_graphs/freq_dfg.svg')
    pm4py.save_vis_performance_dfg(performance_dfg, start_activities, end_activities, '../sample_graphs/perf_dfg.svg')

    return freq_dfg_file_path, perf_dfg_file_path