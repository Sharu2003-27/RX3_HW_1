import { useSelector } from "react-redux"

const Task = () => {

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
                                <br />
                                Status: {task.status}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Task