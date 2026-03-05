document.addEventListener('DOMContentLoaded', () => {
    let tasksStats = {
        total: 15,
        completed: 9,
        remaining: 6
    };

    const taskStatsLists = document.querySelectorAll('.hero-tasks-stat');
    taskStatsLists.forEach(el =>{
        // console.log(el.dataset.taskStat);
        // step1: el.textContent = el.dataset.taskStat;
        el.textContent = tasksStats[el.dataset.taskStat];

    });
});