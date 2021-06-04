import React, { useState, useEffect } from 'react';
import Result from './Result';
import '../css/Test.css'
import logo from '../images/loading.gif';

const Test = (props) => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(1);
    const [radioValue, setRadioValue] = useState('');
    const [shouldShuffle,setShouldShuffle] = useState(true);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [array,setArray] = useState([]);
    const [color,setColor] = useState('red');
    const url = 'https://www.json-generator.com/api/json/get/cftWfSJxAi?indent=2';


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



    if (status===1) {
        
        return (
            <img src={logo} className="loading" alt="loading" />)
    }
    else if (status === 0 && index < data.length) {
        const tempArray =[...data[index].incorrect_answers , data[index].correct_answer];
        if(shouldShuffle && tempArray)
        {
        shuffleArray(tempArray);
        setArray(tempArray);
        setShouldShuffle(false);
        if(data[index].difficulty === 'easy'){
            setColor("#339933");
        }
        else if(data[index].difficulty === 'hard'){
            setColor("#800000");
        }
        else{
            setColor("#0099ff");
        }
        }
        return (
            <div>
                    <legend className="welcomeText">{props.name}</legend>
                    <progress id="file" value={index} max={data.length - 1} className="progress"/>
                    <legend className="difficulty" style={{background:color}}>{data[index].difficulty.charAt(0).toUpperCase()+data[index].difficulty.slice(1)}</legend>
                    <p className="category">Category : {data[index].category}</p>
                    <p dangerouslySetInnerHTML={createMarkup()} className="question"></p>
                    {array.map(option => <><label class="container">{option}<input type="radio" checked={option.toString() === radioValue} name="options" value={option} onChange={(e) => setRadioValue(e.target.value)} /><span className="checkmark"></span></label><br/></>)}
                    <input type="button" onClick={nextQuestion} value="Next" className="Next"/>
            </div>
        )
    }
    else if (index >= data.length) {
        return <Result total={data.length} yourScore={score}/>
    }
    
}


export default Test;