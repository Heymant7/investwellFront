import React, { useEffect, useState } from 'react'
import '../../media/css/main.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const myName = useLocation()
  const name = myName.state.props
  console.log(name);
  const [toast, setToast] = useState(false)
  
  useEffect(()=>{
    setToast(true);
    setTimeout(()=>{
      setToast(false)
    },5000)
  }, [name])
 
  const redirect = useNavigate()
  // const handleHome = async () => {
  //   await axios.get('http://localhost:5000/user/getData', {withCredentials: true})
  //   .then(res => {
  //     console.log(res);
  //     if(res.data === "user logged out"){
  //       redirect('/')
  //     }
  //     else{
  //       document.cookie = `token=${res.data.token}; path=/`;
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }
  
  const handleHome = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/getData', { withCredentials: true });
      console.log(response);
      console.log(response.data);
      if (response.data === "user logged out") {
        redirect('/');
      } else {
        // Set the cookie in the browser
        document.cookie = `token=${response.data.token}; path=/`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="homeDiv">Hello {name}</div>
    <button onClick={handleHome} >CLICK ME</button>
    <div className="">
     
    </div>
    {toast && <div className="toastMsg">
      logged In!!
    </div> }
    </>
  )
}

export default Home 


// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Home = () => {
//     const myName = useLocation();
//     const name = myName.state.props;
//     const [toast, setToast] = useState(false);
//     const redirect = useNavigate();

//     useEffect(() => {
//         setToast(true);
//         setTimeout(() => {
//             setToast(false);
//         }, 5000);
//     }, [name]);

//     const handleHome = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/user/getData', { withCredentials: true });
//             console.log(response);
//             if (response.data === "user logged out") {
//                 redirect('/');
//             } else {
//                 document.cookie = `token=${response.data.token}; path=/`;
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <>
//             <div className="homeDiv">Hello {name}</div>
//             <button onClick={handleHome}>CLICK ME</button>
//             {toast && <div className="toastMsg">logged In!!</div>}
//         </>
//     );
// };

// export default Home;
