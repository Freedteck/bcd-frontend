import { useEffect, useState } from "react";

const Dialog = ({ tasks, visible, onClose, setAppliedStatus }) => {
  const [text, setText] = useState("Accept task");
  const [isAccepted, setIsAccepted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleAccept = () => {
    if (isAccepted) {
      setText("Task completed");
      setAppliedStatus('Task completed')
      setIsCompleted(true);
    } else {
      setIsAccepted(true);
      setText("Finish task");
      setAppliedStatus('Finish task')
    }
  };
  useEffect(() => {
    const dialogElement = document.querySelector("dialog");
    if (visible) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [visible]);

  return (
    <dialog>
      <div className='dialog-container'>
        <div className='cancel-dialog' onClick={onClose}>
          X
        </div>
        <div className='img-name'>
          <p>{tasks.employer}</p>
        </div>
        <div className='dialog-card'>
          <div className='texts'>
            <p className='title' style={{ fontWeight: 600, color: "#ffffff" }}>
              {tasks.title}
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFFCC",
                fontWeight: 400,
              }}>
              {tasks.description}
            </p>
          </div>
          <div className='skills-req'>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFFCC",
                fontWeight: 400,
              }}>
              Skills required:
            </p>
            <div className='skills'>
              {tasks.skills.map((skill, index) => (
                <p key={index} className='skill'>
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div className='pay-btn'>
            <p className='task-payment'>{tasks.reward} USD</p>
            <button
              className='btn cta-button'
              disabled={isCompleted}
              style={{background: isCompleted ? "transparent" : "", cursor:isCompleted? "auto" : ""}}
              onClick={handleAccept}>
              {text}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
