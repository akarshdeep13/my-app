import React, { useState, useEffect } from 'react';
import Result from './Result';
import '../css/Test.css'
const Test = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(1);
    const [radioValue, setRadioValue] = useState('');
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const url = 'https://next.json-generator.com/api/json/get/N1NR3Py5c';


    useEffect(() => {
        getQuiz();
    }, [])

    const getQuiz = async () => {
        const response = await fetch(url);
        const questions = await response.json();
        setData(questions.results);
        setStatus(questions.response_code)
    }

    const nextQuestion = (e) => {
        if (index < data.length) {
            if (radioValue === data[index].correct_answer) {
                setScore(prevScore => prevScore+1);
            }
            setIndex(prevIndex => prevIndex + 1);
        }
        else {
        }
    }



    if (status===1) {
        return (
            <h1>Loading....</h1>)
    }
    else if (status === 0 && index < data.length) {
        return (
            <div>
                <h3>{props.name}</h3>
                <div>
                    <h4>Category::{data[index].category}</h4>
                    <p>{data[index].question}</p>
                    <input type="radio" name="options" value={data[index].correct_answer} onChange={(e) => setRadioValue(e.target.value)} />
                    <label>{data[index].correct_answer}</label><br />

                    {data[index].incorrect_answers.map((option) => {
                        return <>
                            <input type="radio" name="options" value={option} onChange={(e) => setRadioValue(e.target.value)}  />
                            <label>{option}</label><br />
                        </>
                    })}
                    <button onClick={nextQuestion}>Next</button>
                </div>
            </div>
        )
    }
    else if (index >= data.length) {
        return <Result total={data.length} yourScore={score}/>
    }
    
}


export default Test;