import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
 
export const Login: React.FC = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data: any) => {

  }

  const onError = (data: any) => {

  }

  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", alignItems: "center", justifyContent:"center", height: "100%"}}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <img style={{ width: "150px", height: "150px"}}></img>
        <h4>Login</h4>
        <input id='email' type='email' placeholder='Email' {...register("email", { required: true })}/>
        <input id='password' type='password' placeholder='Password' {...register("password", { required: true })}/>
        <button onClick={() => navigate('/dashboard')}>Login</button>
        <a href='#'>Forgot Password?</a>
        <a href='#'>New User? Register here</a>
        </form>
    </div>
  )
};