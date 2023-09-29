import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Standups and DS&T',
        description:'Codelitt Inc. is inviting to a Zoom meeting in which everyone as people from the company will participate.',
        date:"2023-09-28",
        time: "11:15"
    },
    {
        id: 2,
        title: 'Architecture Overview',
        description:'Meeting for the presentation of the new application architecture.',
        date:"2023-10-12",
        time: "12:00"
    }
]

export const reminderSlice =  createSlice({
    name: 'reminders',
    initialState,
    reducers: {
        //add, edit, delete
        addTask: (state, action, ) => {
            state.push(action.payload)
        },
        deleteTask: (state, action, ) => {
            const reminderId = action.payload;
            state.splice(reminderId, 1)
        },
        updateTask: (state, action, ) => {
            const {id, title, description, date, time} = action.payload;
            const foundReminder = state.find(remind => remind.id === id);
            if (foundReminder) {
                foundReminder.title = title;
                foundReminder.description = description;
                foundReminder.date = date;
                foundReminder.time = time;
            }
        }
    }
})

export const {addTask, deleteTask, updateTask} = reminderSlice.actions;

export default reminderSlice.reducer