import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppointmentState {
  appointmentDetails: Array<String>
}

const initialState: AppointmentState = {
  appointmentDetails: [],
}

export const overallSlice = createSlice({
  name: 'overall',
  initialState,
  reducers: {
    updateAppointmentdetails: (state, action) => {
      state.appointmentDetails = action.payload;
    },
  },
})

export const { updateAppointmentdetails } = overallSlice.actions

export default overallSlice.reducer