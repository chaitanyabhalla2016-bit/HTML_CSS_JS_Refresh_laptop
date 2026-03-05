document.addEventListener('DOMContentLoaded', () => {
    let tasksStats = {
        total: 15,
        completed: 10,
        remaining: 5
    };

    const progress = () => Math.round(((tasksStats["total"] - tasksStats["remaining"]) / tasksStats["total"])*100);

    const taskStatsLists = document.querySelectorAll('.hero-tasks-stat');
    taskStatsLists.forEach(el =>{
        // console.log(el.dataset.taskStat);
        // step1: el.textContent = el.dataset.taskStat;
        const statKey = el.dataset.taskStat;
        el.textContent = statKey === "progress"?`Completion progress: ${progress()}%` :`${statKey} tasks ${tasksStats[statKey]}`;
    });
    const progressBar = document.querySelector('.progress-bar');
    progressBar.dataset.taskProgress = progress();
    progressBar.style.width = progress()+"%";
});