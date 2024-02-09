import React from 'react';
import '../../media/css/main.css'
import {Link} from 'react-router-dom'
// import axios from 'axios'

const LoginForm = ({email , setEmail , password, setPassword, error, setError, handleLogin}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('')
  // const redirect = useNavigate()

  // const handleLogin = async (e) => {
  //     e.preventDefault();
  //     const data = {email,password}
  //     console.log(data);
  //     const response = await axios.post('http://localhost:5000/user/login', data)
  //     console.log(response); 

  //     if(response && response.data.success){
  //       redirect('/home', {state : {props: response.data.loginServiceOutput[0].name}})
  //     }
  //     else{
  //       setError(response.data.message)
  //       setEmail('')
  //       setPassword('')
  //     }
  // }

  // console.log(email,password); 

  return (
    <>
      <form className='loginForm' onSubmit={handleLogin}>
      <div className='mainDiv'>  
      <h1 className='loginHeading' >LOGIN PAGE</h1>  
      <div className='emailDiv'>
        <label className='emailLabelLog'>Email:</label><br></br>
        <input placeholder='Enter your email' className='emailInputLog' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='passDiv'>
        <label className='passLabelLog'>Password:</label><br></br>
        <input placeholder='Enter password' className='passInputLog' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className='loginBtn' type='submit'>Login</button>
      <div className="linkClass">
      <Link to='/signup' className='signupLink'>New User ? Signup</Link>
      </div>
      </div>
    </form> 
    <h1 className='errorHeading' >{error}</h1>
    </>
  );
};

export default LoginForm;



