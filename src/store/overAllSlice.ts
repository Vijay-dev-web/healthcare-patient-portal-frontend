import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppointmentState {
  appointmentDetails: Array<AppointmentDetails>,
  userDetails: {
    contact: string,
    email: string,
    role: string,
    token: string,
    id: string,
    name: string
  }
}

export interface AppointmentDetails {
  user_id: string,
  doctor_id: string,
  appointmentDate: Date,
  appointmentTime: string,
  reason: string,
  notes: string,
  active_status: string
}

export const initialState: AppointmentState = {
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