import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {};

  const onError = (data: any) => {};

  const navigate = useNavigate();
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
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h4 className="text-blue-600 text-2xl font-bold mb-4">Login</h4>
          <div className="pb-2">
            <input
              className="border w-64"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <input
            className="border w-64"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <button className="bg-green-600 text-white w-64 my-4 py-1 text-sm" onClick={() => navigate("/dashboard")}>Login</button>
          </div>
          <div>
            <a href="#">Forgot Password?</a>
          </div>
          <Link to="/signin">New User? Register here</Link>
        </form>
      </div>
    </div>
  );
};
