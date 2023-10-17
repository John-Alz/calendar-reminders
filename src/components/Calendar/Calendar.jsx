import React, { useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import "./Calendar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setMyDate } from "../../features/reminders/reminderSlice";
import { v4 as uuidv4 } from "uuid";

export default function Calendar() {
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  let date = new Date();
  let currYear = date.getFullYear();

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let firstDayMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateMonth = new Date(currYear, currMonth + 1, 0).getDate();

  let days = [];

  for (let i = firstDayMonth; i > 0; i--) {
    days.push("");
  }

  for (let i = 1; i <= lastDateMonth; i++) {
    days.push(i);
  }


  //

  const dispatch = useDispatch();

  function convertirFecha(fecha) {
    const date = new Date(fecha);
    const año = date.getFullYear();
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const dia = date.getDate() + 1;
    const diaCorrect = dia.toString().padStart(2, "0");

    return `${año}-${mes}-${diaCorrect}`;
  }

  const handleDate = (day) => {
    const dateForSet = `${currYear}-${currMonth + 1}-${day}`;
    const convertDate = convertirFecha(dateForSet);
    console.log(convertDate);
    dispatch(setMyDate(convertDate));
    setSelectedDate(day);
  };

  //

  const handlePrev = () => {
    setCurrMonth(currMonth - 1);
  };

  const handleNext = () => {
    setCurrMonth(currMonth + 1);
  };

  return (
    <div className="Calendar">
      <div className="Calendar-container">
        <header className="Calendar-header">
          <p className="Calendar-year">{currYear}</p>
          <p className="Calendar-month">{monthsOfYear[currMonth]}</p>
          <div className="Calendar-icons">
            <span onClick={handlePrev} className="Calendar-iconPrev">
              <FcPrevious style={{ color: '#FFFF' }} className="Calendar-icon" />
            </span>
            <span onClick={handleNext} className="Calendar-iconNext">
              <FcNext style={{ color: "#FFFFFF" }} />
            </span>
          </div>
        </header>
        <div className="Calendar-content">
          <ul className="Calendar-weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="Calendar-days">
            {days.map((day) => {
              return (
                <li
                  className={selectedDate === day ? "selected" : ""}
                  onClick={() => handleDate(day)}
                  key={uuidv4()}
                >
                  {day}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
