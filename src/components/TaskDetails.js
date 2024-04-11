import { useEffect } from "react";

const Dialog = ({ tasks, visible, onClose }) => {
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
            <button className='btn cta-button'>Accept task</button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
