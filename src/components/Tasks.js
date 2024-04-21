import { Link } from "react-router-dom";

const Tasks = ({ tasks, endIndex }) => {
  const tasksToDisplay = tasks.slice(0, endIndex);
  // Function to truncate Ethereum address
  const truncateAddress = (address) => {
    const prefix = address.substring(0, 6);
    const suffix = address.substring(address.length - 4);
    return `${prefix}...${suffix}`;
  };
  const renderDeadline = (deadlineInSeconds) => {
    const deadlineInDays = Math.ceil((deadlineInSeconds - Date.now() / 1000) / (24 * 60 * 60)); // Convert seconds to days
    return `${deadlineInDays} day${deadlineInDays !== 1 ? 's' : ''}`;
  };
  return (
    <>
      {tasksToDisplay.map((task, index) => (
        <div className="task-card" key={index}>
          <div className="title-desc">
            {/* <h3 className="task-title">{task.title}</h3> */}
            <p className="task-description">{task.description}</p>
          </div>
          <ul className="skills">
            {task.skillRequired.split(",").map((skill, ind) => (
              <li key={ind}>{skill}</li>
            ))}
          </ul>
          <div className="card-low">
            <div className="pay-btn">
              <p className="task-payment">{parseInt(task.reward)} XTZ</p>
              <p>Deadline: {renderDeadline(parseInt(task.deadline))}</p>

              <Link to={`tasks/${task.id}`} className="btn cta-button">
                {task.completed || "Apply Now"}
              </Link>
            </div>
            <p className="author">By {truncateAddress(task.employer)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
