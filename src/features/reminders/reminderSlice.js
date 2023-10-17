import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const date = new Date();
const year = date.getFullYear()
const month = date.getMonth() + 1;
const day = date.getDate()

const crurrentDay = `${year}-${month}-${day}`

const initialState = {
  myDate: crurrentDay,
  // remindersListState: [],
  remindersListState: [
    {
      id: uuidv4(),
      title: "Standups and DS&T",
      description:
        "Codelitt Inc. is inviting to a Zoom meeting in which everyone as people from the company will participate.",
      date: crurrentDay,
      time: "11:15",
      color: "#c8e6c9",
    },
    {
      id: uuidv4(),
      title: "Architecture Overview",
      description:
        "Meeting for the presentation of the new application architecture.",
      date: crurrentDay,
      time: "13:00",
      color: "#ffcc81",
    },
    {
      id: uuidv4(),
      title: "Architecture Overview",
      description:
        "Meeting for the presentation of the new application architecture.",
      date: crurrentDay,
      time: "12:00",
      color: "#ff8ed4",
    },
    {
      id: uuidv4(),
      title: "Architecture Overview",
      description:
        "Meeting for the presentation of the new application architecture.",
      date: crurrentDay,
      time: "14:00",
      color: "#28cce5",
    },
  ],
};

export const reminderSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    //add, edit, delete
    addTask: (state, action) => {
      // state.remindersListState.push(action.payload)
      state.remindersListState = [...state.remindersListState, action.payload];
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.remindersListState = state.remindersListState.filter(
        (remind) => remind.id !== id
      );
    },
    updateTask: (state, action) => {
      const { id, title, description, date, time, color } = action.payload;
      const foundReminder = state.remindersListState.find(
        (remind) => remind.id === id
      );
      if (foundReminder) {
        foundReminder.title = title;
        foundReminder.description = description;
        foundReminder.date = date;
        foundReminder.time = time;
        foundReminder.color = color;
      }
    },
    setMyDate: (state, action) => {
      return {
        ...state,
        myDate: action.payload,
      };
    },
  },
});

export const { addTask, deleteTask, updateTask, setMyDate } =
  reminderSlice.actions;

export default reminderSlice.reducer;
