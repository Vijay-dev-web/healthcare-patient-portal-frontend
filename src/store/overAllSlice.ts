import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppointmentState {
  appointmentDetails: Array<String>,
  userDetails: {
    contact: string,
    email: string,
    role: string,
    token: string,
    id: string,
    name: string
  }
}

const initialState: AppointmentState = {
  appointmentDetails: [],
  userDetails: {
    contact: "",
    email: "",
    role: "",
    token: "",
    id: "",
    name: ""
  }
}

export const overallSlice = createSlice({
  name: 'overall',
  initialState,
  reducers: {
    updateAppointmentdetails: (state, action) => {
      state.appointmentDetails = action.payload;
    },
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload
    }
  },
})

export const { updateAppointmentdetails, updateUserDetails } = overallSlice.actions

export default overallSlice.reducer