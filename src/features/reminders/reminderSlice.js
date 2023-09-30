import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    myDate: "2023-09-28",
    remindersListDate: [],
    remindersListState: [
    {
        id: uuidv4(),
        title: 'Standups and DS&T',
        description:'Codelitt Inc. is inviting to a Zoom meeting in which everyone as people from the company will participate.',
        date:"2023-09-28",
        time: "11:15",
        color:"#c8e6c9"
    },
    {
        id: uuidv4(),
        title: 'Architecture Overview',
        description:'Meeting for the presentation of the new application architecture.',
        date:"2023-09-28",
        time: "12:00",
        color:"#ffcc81"
    },
    {
        id: uuidv4(),
        title: 'Architecture Overview',
        description:'Meeting for the presentation of the new application architecture.',
        date:"2023-09-28",
        time: "12:00",
        color:"#ff8ed4"
    },
    {
        id: uuidv4(),
        title: 'Architecture Overview',
        description:'Meeting for the presentation of the new application architecture.',
        date:"2023-09-28",
        time: "12:00",
        color:"#28cce5"
    }
]
}

export const reminderSlice =  createSlice({
    name: 'reminders',
    initialState,
    reducers: {
        //add, edit, delete
        addTask: (state, action, ) => {
            // state.remindersListState.push(action.payload)
            state.remindersListState = [...state.remindersListState, action.payload]
        },
        deleteTask: (state, action) => {
            const idToDelete = action.payload;
            return state.remindersListState.filter(remind => remind.id !== idToDelete);
        },
        updateTask: (state, action, ) => {
            const {id, title, description, date, time, color} = action.payload;
            const foundReminder = state.remindersListState.find(remind => remind.id === id);
            if (foundReminder) {
                foundReminder.title = title;
                foundReminder.description = description;
                foundReminder.date = date;
                foundReminder.time = time;
                foundReminder.color = color;
            }
        },
        setMyDate: (state, action) => {
            state.myDate = action.payload;
        },

        addRemidDate: (state, action, ) => {
            state.remindersListDate.push(action.payload)
        },
    }
})

export const {addTask, deleteTask, updateTask, setMyDate, addRemidDate} = reminderSlice.actions;

export default reminderSlice.reducer