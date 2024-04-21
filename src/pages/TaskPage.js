import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TaskInfo from "../components/TaskInfo";
const TaskPage = () => {
  const { id } = useParams();
  const { tasks, error, isPending } = useFetch('getTask', id);
  return (
    <div className="task-page container">
      {isPending && (
        <div style={{ color: "green", textAlign: "center", fontSize: "18px" }}>
          Loading ...{" "}
        </div>
      )}
      {error && (
        <div style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
          {error}
        </div>
      )}
      {tasks && <TaskInfo task={tasks} />}
    </div>
  );
};

export default TaskPage;
