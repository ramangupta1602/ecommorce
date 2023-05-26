import {addToCart} from "../redux/action"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Main() {
    const [count,setCount] = useState(0)
    const dispatch = useDispatch();
    const product = {
        name:'iphone',
        price:'100000',
        color:'blue',
        category:'mobile'
    }
    const counter=()=>{
        setCount(count+1)
        return count
    }
    useEffect(()=>{
        
    },[count])
 
  return (
    <div className="App">

    <button onClick={()=>dispatch(addToCart(counter(count)))}>Add to cart</button>

    </div>
  );
}

export default Main;
