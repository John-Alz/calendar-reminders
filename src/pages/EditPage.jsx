import React from "react";
import RemindersForm from "../components/RemindersForm/RemindersForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../components/Calendar/Calendar";

export default function EditPage() {
  const { remindersListState } = useSelector((state) => state.reminders);
  // console.log(remiders[3].id);

  const params = useParams();
  console.log(params);

  const { myDate } = useSelector((state) => state.reminders);
  console.log(myDate);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dateDeff = null;

  for (let i = 0; i < remindersListState.length; i++) {
    if (params.id === remindersListState[i].id) {
      const dateArray = myDate.split("/");
      const formattedDate = new Date(
        `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
      );
      dateDeff = formattedDate.toLocaleDateString("en-US", options);
    }
  }

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-subctn">
          <div className="Home-oter">
            <h2 className="Home-h2">Edit reminder - {dateDeff}</h2>
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
