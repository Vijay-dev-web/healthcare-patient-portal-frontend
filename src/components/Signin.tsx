import React from 'react'

export const Signin: React.FC = () => {
  return (
    <div>
        <h4>Login</h4>
        <input id='name' type='text' placeholder='Name' />
        <input id='email' type='email' placeholder='Email' />
        <input id='password' type='password' placeholder='Password'/>
        <input id='contact' type='number' placeholder='Phone Number' />
        <input id='type' type='checkbox' aria-label='Doctor'/>
        <button>Sign In</button>
    </div>
  )
}
