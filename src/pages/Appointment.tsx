import React from "react";
import { useForm } from "react-hook-form";

export const Appointment: React.FC = () => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      doctor_name: "",
      appointment_date: "",
      reason: "",
      notes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-200 p-4 w-screen">
      <div className="bg-white p-4">
        <h1 className="text-blue-600 text-2xl font-bold text-center pb-4">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="w-1/2">
              <label
                htmlFor="doctor_name"
                className="form_label block text-blue-600 font-bold"
              >
                Select Doctor
              </label>
              <select
                name="doctor_name"
                className="block border"
                // ref={register("doctor_name")}
              >
                <option value="">Choose a doctor</option>
                <option value="5">Function 2</option>
                <option value="6">Function 3</option>
              </select>
              <label
                htmlFor="appointment_date"
                className="block text-blue-600 font-bold"
              >
                Select Date
              </label>
              <input
                type="date"
                {...register("appointment_date")}
                className="block border"
              ></input>
            </div>
            <div className="w-1/2">
              <label className=" text-blue-600 font-bold block">
                Available Time Slots
              </label>
              <div>
                <button className="bg-gray-200 px-2 py-0.5 m-1">9:00AM</button>
                <button className="bg-gray-200 px-2 py-0.5 m-1">10:00AM</button>
                <button className="bg-gray-200 px-2 py-0.5 m-1">11:00AM</button>
              </div>
              <div>
                <button className="bg-gray-200 px-2 py-0.5 m-1">1:00PM</button>
                <button className="bg-gray-200 px-2 py-0.5 m-1">2:00PM</button>
                <button className="bg-gray-200 px-2 py-0.5 m-1">3:00PM</button>
              </div>

              <label className="text-blue-600 font-bold block">
                Reason for Visit
              </label>
              <textarea {...register("reason")} className="border"></textarea>
              <label className="text-blue-600 font-bold block">
                Additional Notes (Optional)
              </label>
              <textarea
                {...register("notes")}
                className="border block"
              ></textarea>
              <button className="bg-green-600 text-white w-full text-sm font-bold px-2 py-1 my-1 block">
                Confirm Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
