// import LoginForm from './loginForm';
// import '../../media/css/main.css'

// const loginPage = () => {
//   return (
//     <div>
//       <LoginForm/>
//     </div>
//   );
// };

// export default loginPage;

import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './loginForm';

const Index = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const redirect = useNavigate()

  const handleLogin = async (e) => {
      e.preventDefault();
      const data = {email,password}
      console.log(data);
      const response = await axios.post('http://localhost:5000/user/login', data)
      console.log(response); 

      if(response && response.data.success){
        redirect('/home', {state : {props: response.data.loginServiceOutput.name}})  // data.loginServiceOutput.name
      }
      else{
        setError(response.data.message)
        setEmail('')
        setPassword('')
      }
  }
  
  return (
    <LoginForm email = {email} setEmail = {setEmail} password = {password} setPassword = {setPassword}
    error = {error} setError = {setError} handleLogin = {handleLogin} />
  )
}

export default Index

