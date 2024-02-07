import React, { useEffect, useState } from 'react'
import '../../media/css/main.css'
import { useLocation } from 'react-router-dom'

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
 
  return (
    <>
    <div className="homeDiv">Hello {name}</div>
    {toast && <div className="toastMsg">
      logged In!!
    </div> }
    </>
  )
}

export default Home 