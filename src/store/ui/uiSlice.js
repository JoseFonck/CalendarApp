import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        isDateModalOpen: false
    },
    reducers:{
        onOpenDateModal: (state) => { state.isDateModalOpen = true }, // Abrir modal
        onCloseDateModal: (state) => { state.isDateModalOpen = false } // Cerrar modal

    },
});

export const {onOpenDateModal,onCloseDateModal} = uiSlice.actions;