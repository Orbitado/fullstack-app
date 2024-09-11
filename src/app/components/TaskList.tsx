import { loadTasks } from "@/services/loadTasks";

const TaskList = async () => {
  const tasks = await loadTasks();
  return (
    <ul className="dark:font-bold">
      {tasks.map((task) => (
        <li key={task._id}>
          <h2>{task.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
