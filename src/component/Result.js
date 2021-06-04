import React,{ useState,useEffect } from 'react';
import '../css/Result.css'

const Result = (props) => {
const [resultStatus,setResultStatus] = useState("Pass");
const [color,setColor] = useState('green');


useEffect(()=>{
if(props.yourScore/props.total*100 < 40){
setResultStatus("Fail")
setColor("#800000")
}
else{
  setResultStatus("Pass")
  setColor("#339933")
}
},[])


    return <>
        <p className="completed">Test Completed </p>
        <p className="status" style={{background:color}}>{resultStatus}</p>
        <legend className="score">{props.yourScore}/{props.total}</legend>
      </>
}
export default Result;