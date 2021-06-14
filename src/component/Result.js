import React from 'react';
import '../css/Result.css'

const Result = (props) => {



    return <div className="form-style">
        <p align="center" className="completed">Test Completed </p>
{/*<p className="status" style={{background:color}}>{resultStatus}</p>*/}
        <p align="center" className="score">{props.yourScore}/{props.total}</p>
      </div>
}
export default Result;