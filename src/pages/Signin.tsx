import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
      role: 1,
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
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Sign In</h4>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {}
        <input
          id="email"
          type="email"
          placeholder="Email"
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
          {...register("password", { required: "Password is required" })}
        />
        <input
          id="contact"
          type="text"
          placeholder="Phone Number"
          {...register("contact", { required: "Mobile no is required" })}
        />
        <label htmlFor="role">is Doctor</label>
        <input
          id="type"
          type="checkbox"
          aria-label="Doctor"
          {...register("role", { required: "Role is required" })}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
