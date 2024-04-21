import { ethers } from "ethers";
import abi from "../abi/MicroTaskAbi.json";
import { useParams } from "react-router-dom";

const TaskInfo = ({ task }) => {
  const {id} = useParams()
  const contractAddress = "0xfcDf4673d9BD57DD25f8BCdCCa9a19ae60AA5e66";
  const truncateAddress = (address) => {
    if (typeof address === "string") {
      const prefix = address.substring(0, 6);
      const suffix = address.substring(address.length - 4);
      return `${prefix}...${suffix}`;
    } else {
      return ""; // or some default value if address is not a string
    }
  };
  const handleAccept = async () => {
    try {
      // Connect to the provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      // Call the createTask function on the contract
      await contract.acceptTask(id);

      console.log("Task accepted successfully!");
    } catch (error) {
      console.error("Error accepting task:", error);
      // Optionally, you can show an error message to the user
    }
  };

  const renderDeadline = (deadlineInSeconds) => {
    const deadlineInDays = Math.ceil(
      (deadlineInSeconds - Date.now() / 1000) / (24 * 60 * 60)
    ); // Convert seconds to days
    return `${deadlineInDays} day${deadlineInDays !== 1 ? "s" : ""}`;
  };
  return (
    <div className="tasks-info">
      <div className="tasks-container">
        <div className="cancel-tasks">X</div>
        <div className="img-name">
          <p>{truncateAddress(task.employer)}</p>
        </div>
        <div className="tasks-card">
          <div className="texts">
            {/* <p className="title" style={{ fontWeight: 600, color: "#ffffff" }}>
              {tasks.title}
            </p> */}
            <p
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFFCC",
                fontWeight: 400,
              }}
            >
              {task.description}
            </p>
          </div>
          <div className="skills-req">
            <p
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFFCC",
                fontWeight: 400,
              }}
            >
              Skills required:
            </p>
            <div className="skills">
              {typeof task.skillRequired === "string" &&
                task.skillRequired.split(",").map((skill, index) => (
                  <p key={index} className="skill">
                    {skill}
                  </p>
                ))}
            </div>
          </div>
          <div className="pay-btn">
            <p className="task-payment">{parseInt(task.reward)} XTZ</p>
            <p>Deadline: {renderDeadline(parseInt(task.deadline))}</p>
            <button className="btn cta-button" onClick={handleAccept}>
              {task.completed || "Accept task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
