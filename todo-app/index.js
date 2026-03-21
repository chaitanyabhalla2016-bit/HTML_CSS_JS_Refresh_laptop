
document.addEventListener('DOMContentLoaded', () => {
    let tasksStats = {
        total: 6,
        completed: 3,
        remaining: 2,
        cancelled: 1
    };
    const categories = ["Work", "Personal", "Health", "Finance"];
    const priorities = ['high', 'medium', 'low'];
    const tasks = [
        { taskId: 1, taskTitle: "Say Hello!", addTaskCategory: "Personal", addTaskPriority: "low", addTaskDeadLine: ["2026-03-17", "11:12"], addTaskStatus: "completed" },
        { taskId: 2, taskTitle: "Visit Doctor!", addTaskCategory: "Health", addTaskPriority: "high", addTaskDeadLine: ["2026-03-19", "10:20"], addTaskStatus: "pending" },
        { taskId: 3, taskTitle: "Attend Board Meeting!", addTaskCategory: "Finance", addTaskPriority: "high", addTaskDeadLine: ["2026-03-18", "11:12"], addTaskStatus: "completed" },
        { taskId: 4, taskTitle: "Call manager", addTaskCategory: "Work", addTaskPriority: "medium", addTaskDeadLine: ["2026-03-21", "01:30"],  addTaskStatus: "cancelled"}
    ];

    tasks.map(tsk => { 
        let taskStatusClass = "";
        const today = new Date().toISOString().split("T")[0];
        tsk.addTaskStatus === "completed" ? taskStatusClass = "btn-success" : (tsk.addTaskStatus === "pending" ? taskStatusClass = "btn-warning" : taskStatusClass = "btn-danger");
        tsk.addTaskPriority === "high" ? taskPriorityClass = "btn-danger" : (tsk.addTaskStatus === "medium" ? taskPriorityClass = "btn-warning" : taskPriorityClass = "btn-success");
        if (tsk.addTaskDeadLine[0] >= today) {
            document.querySelector('.todays-tasks-container').innerHTML += `<div class="todays-task-list" data-task-id="${tsk.taskId}" data-task-cat="${tsk.addTaskCategory}" data-task-pri="${tsk.addTaskPriority}"><span><span class="priority-circle ${taskPriorityClass}"></span><span class="pill btn-primary">${tsk.addTaskCategory}</span><span class="pill btn-black">${tsk.addTaskDeadLine[0]}</span>&ensp;<span class="pill btn-black">${tsk.addTaskDeadLine[1]}</span>&ensp;<span class="text-light">${tsk.taskTitle}</span></span><span class="pill ${taskStatusClass}">${tsk.addTaskStatus}</span></div>`
        }

        document.querySelector('#taskTableTbody').innerHTML += `<tr data-task-id="${tsk.taskId}" data-task-cat="${tsk.addTaskCategory}" data-task-pri="${tsk.addTaskPriority}"><td>${tsk.taskTitle}</td><td>${tsk.addTaskCategory}</td><td>${tsk.addTaskPriority}</td><td>${tsk.addTaskDeadLine[0]},${tsk.addTaskDeadLine[1]}</td><td><span>${tsk.addTaskStatus}</span></td><td><div class="btn-group"><button data-task-id-btn="${tsk.taskId}" data-task-status = "completed" class="btn btn-success">done</button><button data-task-id-btn="${tsk.taskId}" data-task-status = "disable" class="btn btn-danger">disable</button></div></td></tr>`;
    });
    

    // document.querySelector('#addTaskcategories').innerHTML = categories.map(cat => `<option value="${cat}"></option>`).join('');

    document.querySelector('#addTaskCategory').innerHTML = categories.map(cat => `<option value="${cat}">${cat.toUpperCase()}</option>`);
    document.querySelector('#addTaskPriority').innerHTML = priorities.map(pri => `<option value="${pri}">${pri.toUpperCase()}</option>`);



    const taskStatsLists = document.querySelectorAll('.hero-tasks-stat');
    taskStatsLists.forEach(el =>{
        const statKey = el.dataset.taskStat;
        el.innerHTML = statKey === "progress"?`Completion progress: ${progress(el.dataset.taskStat)}%:` :`<span>${statKey}: ${tasksStats[statKey]}.</span><span>${progress(el.dataset.taskStat)}%</span>`;
    });
    // const progressBars = document.querySelectorAll('.progress-badge');
    // progressBars.forEach(pb => {
    //     console.log(pb.dataset.taskProgress);

    //     // pb.dataset.taskProgress = progress(pb.dataset.taskProgress);
    //     // pb.style.width = progress(pb.dataset.taskProgress) + "%";
    //     pb.innerHTML = `<span>${pb.dataset.taskProgress} tasks: ${tasksStats[pb.dataset.taskProgress]}</span><span>${progress(pb.dataset.taskProgress)}%</span>`;
    // });
    function progress(progressStatStatus){
        // console.log(progressStatStatus);
        let statProgressValue = progressStatStatus === "completed" ?
            Math.round(((tasksStats["total"] - (tasksStats["cancelled"] + tasksStats["remaining"])) / tasksStats["total"]) * 100) :
            (progressStatStatus === "remaining" ? Math.trunc(((tasksStats["total"] - (tasksStats["completed"] + tasksStats["cancelled"])) / tasksStats["total"]) * 100) :
                Math.round(((tasksStats["total"] - (tasksStats["completed"] + tasksStats["remaining"])) / tasksStats["total"]) * 100));
        console.log(statProgressValue);
        return statProgressValue;
    }
    // document.querySelector('#addTaskBtn').addEventListener('click', function (e) {
    //     e.preventDefault();
    //     console.log(new Date(document.querySelector('#addTaskDeadLine').value).toISOString().slice(0,16).split('T'));
    // });
});