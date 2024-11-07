import React from 'react'
import { useForm } from 'react-hook-form'

export const Appointment: React.FC = () => {
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            doctor_name: "",
            appointment_date: "",
            reason: "",
            notes: ""
        }
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <div className='flex'>
        <h1>Book an Appointment</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
            <div>
            <label htmlFor="doctor_name" className="form_label">
  Select Doctor
</label>
            <select
            name='doctor_name'
            // ref={register("doctor_name")}
            >
                  <option value=""></option>
  <option value="5">Function 2</option>
  <option value="6">Function 3</option>
            </select>
            <label htmlFor='appointment_date'>
                Select Date
            </label>
            <input type='date' {...register("appointment_date")}></input>
            </div>
            <div>
                <label>Available Time Slots</label>

                <label>Reason for Visit</label>
                <textarea {...register("reason")}></textarea>
                <label>Additional Notes (Optional)</label>
                <textarea {...register("notes")}></textarea>
                <button>Confirm Booking</button>
            </div>
        </div>
        </form>
    </div>
  )
}