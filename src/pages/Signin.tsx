import React from 'react'
import { useForm } from 'react-hook-form'

export const Signin: React.FC = () => {
  const { register , handleSubmit} = useForm({ defaultValues: {
    name: "",
    email: "",
    password: "",
    contact: "",
    role: 1
  }})

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onError = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h4>Sign In</h4>
        <input id='name' type='text' placeholder='Name' {...register("name", { required: true })}/>
        <input id='email' type='email' placeholder='Email' {...register("email", { required: true })}/>
        <input id='password' type='password' placeholder='Password' {...register("password", { required: true })}/>
        <input id='contact' type='text' placeholder='Phone Number' {...register("contact", { required: true })}/>
        <select>
          <option>Doctor</option>
          <option>Patient</option>
        </select>
        <input id='type' type='checkbox' aria-label='Doctor' {...register("role", { required: true })}/>
        <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}
