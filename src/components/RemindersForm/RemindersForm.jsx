import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  updateTask,
} from "../../features/reminders/reminderSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import "./RemindersForm.scss";

function validate(reminder) {
  let errors = {};
  if (!reminder.title) {
    errors.title = "Title required.";
  } else if (!reminder.description) {
    errors.description = "Description required.";
  } else if (reminder.description.split(" ").length > 30) {
    errors.description = "Maximum characters included must be 30.";
  } else if (!reminder.date) {
    errors.date = "Date required.";
  } else if (!reminder.time) {
    errors.time = "Time required.";
  } else if (!reminder.color) {
    errors.color = "Color required.";
  }
  return errors;
}

export default function RemindersForm() {
  const [reminder, setReminder] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    color: "",
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const remindersListState = useSelector(
    (state) => state.reminders.remindersListState
  );

  const handleChange = (e) => {
    setReminder({
      ...reminder,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...reminder,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(reminder));
    } else {
      dispatch(
        addTask({
          ...reminder,
          id: uuidv4(),
        })
      );
    }
    navigate("/");
  };

  const handleRemove = (id) => {
    dispatch(deleteTask(id));
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setReminder(remindersListState.find((remind) => remind.id === params.id));
    }
  }, []);

  const location = useLocation();
  const urlActual = `${location.pathname}/${params.id}`;

  return (
    <>
      <form className="Form">
        <div className="Form-ctnOne">
          <label className="Form-labelTitle">Title</label>
          <input
            className="Form-title"
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="title"
            value={reminder.title}
          />
          {errors.title && (
            <small className="Form-errors">{errors.title}</small>
          )}
          <br />
          <label className="Form-labelDesc">Description</label>
          <textarea
            className="Form-textarea"
            onChange={handleChange}
            name="description"
            placeholder="description"
            value={reminder.description}
          ></textarea>
          {errors.description && (
            <small className="Form-errors">{errors.description}</small>
          )}
          <br />
        </div>
        <div className="Form-ctnTwo">
          <div className="Form-ctnd">
            <label className="Form-labelDate">Date</label>
            <input
              className="Form-date"
              onChange={handleChange}
              type="date"
              id="date"
              name="date"
              value={reminder.date}
            />
            {errors.date && (
              <small className="Form-errors">{errors.date}</small>
            )}
            <br />
          </div>
          <div className="Form-ctnd">
            <label className="Form-labelTime">Time</label>
            <input
              className="Form-time"
              onChange={handleChange}
              type="time"
              id="time"
              name="time"
              step="60"
              value={reminder.time}
            />
            {errors.time && (
              <small className="Form-errors">{errors.time}</small>
            )}
          </div>
        </div>

        <div>
          <label className="Form-labelColor">Color</label>
          <div className="Form-picker">
            <input
              onChange={handleChange}
              name="color"
              value="#C8E6C9"
              className="Form-pickOne"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#F5DD29"
              className="Form-pickTwo"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#FFCC80"
              className="Form-pickThree"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#EF9A9A"
              className="Form-pickFour"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#CD8DE5"
              className="Form-pickFive"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#5BA4CF"
              className="Form-pickSix"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#29CCE5"
              className="Form-pickSeven"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#6DECA9"
              className="Form-pickEight"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#FF8ED4"
              className="Form-pickNine"
              type="checkbox"
            />
            <input
              onChange={handleChange}
              name="color"
              value="#BCAAA4"
              className="Form-pickTen"
              type="checkbox"
            />
          </div>
          {errors.color && (
            <small className="Form-errors">{errors.color}</small>
          )}
        </div>

        <div className="Form-separation"></div>

        <div className="Form-ctnBtns">
          <div className="Form-remoBtn">
            {urlActual !== "/create-reminder/undefined" ? (
              <button
                onClick={() => handleRemove(reminder.id)}
                className="Form-btnThree"
              >
                Remove
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="Form-twobnts">
            <Link to="/">
              <button className="Form-btnOne">Cancel</button>
            </Link>
            <button
              disabled={
                errors.title ||
                errors.description ||
                errors.date ||
                errors.time ||
                errors.color
                  ? true
                  : false
              }
              onClick={handleSubmit}
              className="Form-btnTwo"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
