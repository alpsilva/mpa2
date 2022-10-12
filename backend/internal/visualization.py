import pm4py
from pm4py.objects.log.obj import EventLog
from pm4py.algo.filtering.dfg.dfg_filtering import filter_dfg_on_activities_percentage, filter_dfg_on_paths_percentage


def discover_dfg(eventlog : EventLog, category : str):
    # Getting dfg
    if category=="freq":
        dfg, start_activities, end_activities = pm4py.discover_dfg(eventlog)
    else:
        dfg, start_activities, end_activities = pm4py.discover_performance_dfg(eventlog)
    
    return dfg, start_activities, end_activities


def generate_svg(eventlog: EventLog, percentage : float, on : str = "activities"):
    # Creating count dict
    activities_count = {}
    for demanda in eventlog:
        for atividade in demanda:
            name = atividade["tarefa"]
            try:
                activities_count[name] += 1
            except:
                activities_count[name] = 1

    frequency_dfg, frequency_start_activities, frequency_end_activities = discover_dfg(eventlog, "freq")
    performance_dfg, performance_start_activities, performance_end_activities = discover_dfg(eventlog, "perf")

    freq_dfg_file_path = '../freq_dfg.svg'
    perf_dfg_file_path = '../perf_dfg.svg'

    # Filter by percentage
    if on=="activities":
        frequency_dfg, frequency_start_activities, frequency_end_activities, frequency_activities_count = (
            filter_dfg_on_activities_percentage(
                frequency_dfg, frequency_start_activities, frequency_end_activities, activities_count, percentage
            )
        )
        performance_dfg, performance_start_activities, performance_end_activities, performance_activities_count = (
            filter_dfg_on_activities_percentage(
                performance_dfg, performance_start_activities, performance_end_activities, activities_count, percentage
            )
        )
    else:
        frequency_dfg, frequency_start_activities, frequency_end_activities, frequency_activities_count = (
            filter_dfg_on_paths_percentage(
                frequency_dfg, frequency_start_activities, frequency_end_activities, activities_count, percentage
            )
        )
        performance_dfg, performance_start_activities, performance_end_activities, performance_activities_count = (
            filter_dfg_on_paths_percentage(
                performance_dfg, performance_start_activities, performance_end_activities, activities_count, percentage
            )
        )

    pm4py.save_vis_dfg(frequency_dfg, frequency_start_activities, frequency_end_activities, freq_dfg_file_path)
    pm4py.save_vis_performance_dfg(performance_dfg, performance_start_activities, performance_end_activities, perf_dfg_file_path)

    return freq_dfg_file_path, perf_dfg_file_path
