import React, { useState } from 'react';
import '../../media/css/main.css'
import SignupForm from './signupForm';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const SignupPage = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const redirect = useNavigate()
  const [error,setError] = useState() 

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {name,email,password}
    console.log(data);
    const response = await axios.post('http://localhost:5000/user/signup',data)
    console.log(response);
    
    if(response && response.data.success){
      redirect('/')
    }else{
       setError(response.data.message)
    }
} 

  return (
    <>
      <SignupForm name = {name} email = {email} password = {password} error = {error} handleSignup = {handleSignup} setName = {setName} setEmail = {setEmail} setPassword = {setPassword}/>
    </>
  );
};

export default SignupPage;


