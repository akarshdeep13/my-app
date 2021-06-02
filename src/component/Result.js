import React from 'react';

const Result = (props) => {
    return <>
        <h1>Test Completed </h1>
        <h4> Your Score = {props.yourScore}/{props.total}</h4>
      </>
}
export default Result;