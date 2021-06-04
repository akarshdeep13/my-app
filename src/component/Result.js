import React from 'react';
import '../css/Result.css'

const Result = (props) => {



    return <>
        <p className="completed">Test Completed </p>
{/*<p className="status" style={{background:color}}>{resultStatus}</p>*/}
        <legend className="score">{props.yourScore}/{props.total}</legend>
      </>
}
export default Result;