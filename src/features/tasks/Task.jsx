import { useDispatch, useSelector } from "react-redux"
import { taskStatusButton } from "./taskList"

const Task = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks.tasks)

    const groupedTasks = tasks.reduce((acc, task) => {
        const date = task.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(task);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedTasks).sort();

    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            {sortedDates.map((date) => (
                <div key={date}>
                    <h3>{formatDate(date)}</h3>
                    <ul>
                        {groupedTasks[date].map((task) => (
                            <li key={task.taskId}>
                                {task.task}
                                {" "}
                                <button onClick={() => dispatch(taskStatusButton(task.taskId))}>
                                    {task.status}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Task