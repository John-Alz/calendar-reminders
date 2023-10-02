import React from "react";
import img from "../../assets/img-empty.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./RemindersList.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";

export default function RemindersList() {
  const { remindersListState } = useSelector((state) => state.reminders);

  // const targetDate = "2023-09-28"
  const { myDate } = useSelector((state) => state.reminders);

  let reminds = [];

  if (remindersListState && remindersListState.length) {
    for (let i = 0; i < remindersListState.length; i++) {
      if (myDate === remindersListState[i].date) {
        // console.log("match", remindersListState[i]);
        reminds.push(remindersListState[i]);

        reminds.sort((a, b) => {
          const timeA = new Date(`2000-01-01T${a.time}`);
          const timeB = new Date(`2000-01-01T${b.time}`);
          return timeA - timeB;
        });
      } else {
        console.log("Esta vacio");
      }
    }
  } else {
    console.error("remindersListState no esta definido");
  }

  return (
    <div className="List">
      {reminds.length !== 0 ? (
        reminds.map((remid) => (
          <div key={remid.id} className="List-main">
            <div
              style={{
                borderRadius: "16px",
                border: `5px solid ${remid.color}`,
              }}
            ></div>
            <div className="List-container">
              <h3>{remid.title}</h3>
              <p>{remid.description}</p>
            </div>
            <div className="List-line"></div>
            <div className="List-time">
              <AiOutlineClockCircle
                style={{ color: " #797979" }}
                className="List-ticon"
              />
              <p>{remid.time}</p>
            </div>
            <Link to={`/edit-reminder/${remid.id}`}>
              <button className="List-btnEdit">
                <MdOutlineModeEdit style={{ color: "#FFFFFF" }} />
              </button>
            </Link>
            {/* <button onClick={() => handleRemove(remid.id)}>Remove</button> */}
          </div>
        ))
      ) : (
        <div className="List-empty">
          <img src={img} />
          <h1>No reminders registered so far</h1>
        </div>
      )}
    </div>
  );
}
