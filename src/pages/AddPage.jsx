import React from "react";
import RemindersForm from "../components/RemindersForm/RemindersForm";
import { useSelector } from "react-redux";
import Calendar from "../components/Calendar/Calendar";

export default function addPage() {
  const { myDate } = useSelector((state) => state.reminders);
  console.log(myDate);

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
    // console.log(formattedDate.toLocaleDateString('en-US', options));
    dateDeff = formattedDate.toLocaleDateString("en-US", options);
  } else {
    console.log("ERROR");
  }

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-subctn">
          <div className="Home-oter">
            <h2 className="Home-h2">Add reminder - {dateDeff}</h2>
          </div>

          <div>
            <RemindersForm />
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
