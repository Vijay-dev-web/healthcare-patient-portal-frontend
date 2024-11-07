import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../store/overAllSlice";

export const Signin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
      role: true,
    },
  });

  const onSubmit = (data: any) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://10.137.199.32:4000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        ...data,
        role: data?.role ? 1 : 2
      },
    };
    axios
      .request(config)
      .then((response) => {
        localStorage.setItem("tokenDetails", response.data.token);
        dispatch(updateUserDetails(response.data))
        navigate("/dashboard/appointments")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center p-4 text-center">
    <div>
      <div className="flex justify-center">
        <img
          src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg"
          alt=""
          className="w-20 text-center mb-4"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="text-blue-600 text-2xl font-bold mb-4">Sign In</h4>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="border block w-64 mb-2"
          {...register("name", { required: "Name is required" })}
        />
        {}
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border block w-64 mb-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="border block w-64 mb-2"
          {...register("password", { required: "Password is required" })}
        />
        <input
          id="contact"
          type="text"
          placeholder="Phone Number"
          className="border block w-64 mb-2"
          {...register("contact", { required: "Mobile no is required" })}
        />
        <label htmlFor="role">is Doctor</label>
        <input
          id="type"
          type="checkbox"
          aria-label="Doctor"
          {...register("role", { required: "Role is required" })}
        />
        <button type="submit" className="bg-green-600 text-white w-64 my-4 py-1 text-sm block">Sign In</button>
        <Link to="/login">Have an account already? Login here</Link>
      </form>
    </div>
    </div>
  );
};
