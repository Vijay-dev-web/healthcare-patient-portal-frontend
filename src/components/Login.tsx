import React from 'react'
 
export const LoginComponent: React.FC = () => {
  return (
    <div style={{ display: "grid", alignItems: "center", justifyContent:"center", height: "100%"}}>
        <img style={{ width: "150px", height: "150px"}}></img>
        <h4>Login</h4>
        <input id='email' type='email' placeholder='Email' />
        <input id='password' type='password' placeholder='Password'/>
        <button>Login</button>
        <a href='#'>Forgot Password?</a>
        <a href='#'>New User? Register here</a>
    </div>
  )
};