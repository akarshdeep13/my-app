import React, { useState, useEffect } from 'react';
import '../css/Test.css'
const Test = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(1);
    const url = 'https://next.json-generator.com/api/json/get/N1NR3Py5c';


    useEffect(() => {
        getQuiz();
    }, [])

    const getQuiz = async () => {
        const response = await fetch(url);
        const questions = await response.json();
        setData(questions.results);
        setStatus(questions.response_code)
    };

    if (status === 0) {
        return (
            <article>
                <h3>{props.name}</h3>
                <div>
                        <h4>Category::{data[0].category}</h4>
                        <p>{data[0].question}</p>
                        <input type="radio" name="options" value={data[0].correct_answer} />
                        <label>{data[0].correct_answer}</label><br/>
                    
                    {data[0].incorrect_answers.map((option) => {
                        return <>
                            <input type="radio" name="options" value={option} />
                            <label>{option}</label><br />
                        </>
                    })}
                    <button>Next</button>
                    </div>
            </article>
        )
    }
    return (
        <h1>Loading....</h1>)
}


export default Test;