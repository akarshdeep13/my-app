import React, { useState, useEffect } from 'react';
import Result from './Result';
import '../css/Test.css'
const Test = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(1);
    const [radioValue, setRadioValue] = useState('');
    const [shouldShuffle,setShouldShuffle] = useState(true);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [array,setArray] = useState([]);
    const url = 'https://jsonkeeper.com/b/609F';


    useEffect(() => {
        getQuiz();
    },[])

    const getQuiz = async () => {
        const response = await fetch(url);
        const questions = await response.json();
        setData(questions.results);
        setStatus(questions.response_code);
    }

    const nextQuestion = (e) => {
        
        if (index < data.length) {
            if (radioValue === data[index].correct_answer.toString()) {
                setScore(prevScore => prevScore + 1);
            }
            setIndex(prevIndex => prevIndex + 1);
            setShouldShuffle(true);
        }
    }
    function createMarkup() {
        return {__html: data[index].question};
      }
    function shuffleArray(array) {
        let i = array.length -1;
        for(;i>0;i--)
        {
            const j = Math.floor(Math.random() * (i+1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    const [color,setColor] = useState('red');



    if (status===1) {
        
        return (
            <h1>Loading....</h1>)
    }
    else if (status === 0 && index < data.length) {
        const tempArray =[...data[index].incorrect_answers , data[index].correct_answer];
        if(shouldShuffle && tempArray)
        {
        shuffleArray(tempArray);
        setArray(tempArray);
        setShouldShuffle(false);
        }
        return (
            <div>
                <h3 className="welcomeText">{props.name}</h3>
                <div>
                    <legend className="difficulty" style={{background:color}}>{data[index].difficulty.charAt(0).toUpperCase()+data[index].difficulty.slice(1)}</legend>
                    <h4>Category::{data[index].category}</h4>
                    <p dangerouslySetInnerHTML={createMarkup()}></p>
                    {array.map(option => <><input type="radio" checked={option.toString() === radioValue} name="options" value={option} onChange={(e) => setRadioValue(e.target.value)} />{option}<br/></>)}
                    <input type="button" onClick={nextQuestion} value="Next"/>
                </div>
            </div>
        )
    }
    else if (index >= data.length) {
        return <Result total={data.length} yourScore={score}/>
    }
    
}


export default Test;