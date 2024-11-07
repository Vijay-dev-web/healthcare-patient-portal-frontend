import React from 'react'

export const Appointment: React.FC = () => {
  return (
    <div className='flex'>
        <h1>Book an Appointment</h1>
        <div>
            <div>
            <label>Select Doctor</label>
            <select>
                <option>Vasanth</option>
            </select>
            <label>
                Select Date
            </label>
            <input type='date'></input>
            </div>
            <div>
                <label>Available Time Slots</label>

                <label>Reason for Visit</label>
                <textarea></textarea>
                <label>Additional Notes (Optional)</label>
                <textarea></textarea>
                <button>Confirm Booking</button>
            </div>
        </div>
    </div>
  )
}