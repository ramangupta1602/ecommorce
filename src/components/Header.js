import React from 'react'
import {BsCartDash} from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {
    const result = useSelector((state)=>state)
    console.log(result,"state")
    
  return (
    <div style={{height:'10vh',backgroundColor:'gray',width:'100%',display:'flex',flexDirection:'row-reverse'}}>
        <div  style={{display:'flex',flexDirection:'row-reverse'}}>
            <span style={{backgroundColor:'red',borderRadius:'100%',height:'35%',width:'35%',marginRight:'5px',marginTop:'7px',position:"relative",right:'12px'}}>{result?.cartData}</span>
            <BsCartDash size={50} style={{height:'10vh'}}/> 
        </div>
    </div>
  )
}

export default Header