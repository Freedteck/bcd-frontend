import { useState } from "react";
import Dialog from "./TaskDetails";
// import useFetch from "../hooks/useFetch";

const Tasks = ({ tasks, endIndex }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowDialog(true);
  };

  const tasksToDisplay = tasks.slice(0, endIndex);
  return (
    <>
      {tasksToDisplay.map((task, index) => (
        <div className='task-card' key={index}>
          <div className='title-desc'>
            <h3 className='task-title'>{task.title}</h3>
            <p className='task-description'>{task.description}</p>
          </div>
          <ul className='skills'>
            {task.skills.map((skill, ind) => (
              <li key={ind}>{skill}</li>
            ))}
          </ul>
          <div className='card-low'>
            <div className='pay-btn'>
              <p className='task-payment'>{task.reward} USD</p>
              <button
                className='btn cta-button'
                onClick={() => handleTaskClick(task)}>
                Apply Now
              </button>
            </div>
            <p className='author'>By {task.employer}</p>
          </div>
        </div>
      ))}
      {showDialog && (
        <Dialog
          tasks={selectedTask}
          visible={showDialog}
          onClose={() => setShowDialog(false)}
        />
      )}
    </>
  );
};

export default Tasks;
