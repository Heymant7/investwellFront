import React from 'react'
import '../../media/css/main.css'
import { Link} from 'react-router-dom'

const SignupForm = ({name, email, password, error, handleSignup, setName, setEmail, setPassword}) => {

  
  // const [toast,setToast] = useState(false)

  
  
  // useEffect(()=>{
  //   setToast(true);
  //   setTimeout(()=>{
  //     setToast(false)
  //   },5000)
  // }, [name])
 

  return (
    <>
      <form onSubmit={handleSignup}>
      <div className='mainDiv'>  
      <h1 className='loginHeading' >SIGNUP PAGE</h1>  
      <div className='nameDiv'>
        <label className='nameLabelSign' >Name:</label><br></br>
        <input placeholder='Enter your name' className='nameInputSign' type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className='emailDiv'>
        <label className='emailLabelSign' >Email:</label><br></br>
        <input placeholder='Enter your email' className='emailInputSign' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='passDiv'>
        <label className='passLabelSign'>Password:</label><br></br>
        <input placeholder='Enter password' className='passInputSign' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className='signupBtn'>Signup</button><br></br>
      <div className="linkClass"><Link to='/' className='loginLink' >Already a user ? Login</Link></div>
      </div>
    </form>
    <h1 className='errorHeading'>{error}</h1>
    {/* {toast && <div className="errorHeading">User created</div> } */}
    </> 
  ) 
}

export default SignupForm