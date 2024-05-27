import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const tempEvent = {
        title: "Cumpleaños del Jefe",
        notes: "Hay que comprar un pastel",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: "#fafafa",
        user: {
          _id: 123,
          name: "Jose",
        },
    }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        events: [tempEvent],
        activeEvent: null
    },

    reducers:{
        // getViewEvent:(state) => state.
    },
});

export const {events} = calendarSlice.actions;