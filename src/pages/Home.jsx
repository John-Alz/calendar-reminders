import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import RemindersList from "../components/RemindersList/RemindersList";
import Calendar from "../components/Calendar/Calendar";
import { useSelector } from "react-redux";

export default function Home() {
  const { myDate } = useSelector((state) => state.reminders);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dateDeff;

  if (myDate) {
    const dateArray = myDate.split("/");
    const formattedDate = new Date(
      `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
    );
    dateDeff = formattedDate.toLocaleDateString("en-US", options);
  } else {
    console.log("ERROR");
  }

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-subctn">
          <div className="Home-oter">
            <h2 className="Home-h2">{dateDeff}</h2>
            <Link to="/create-reminder">
              <button className="Home-btn">Add reminder</button>
            </Link>
          </div>

          <div>
            <RemindersList />
          </div>
        </div>
        <div className="Home-calendar">
          {/* Calendario */}
          <Calendar />
        </div>
      </div>
    </div>
  );
}
