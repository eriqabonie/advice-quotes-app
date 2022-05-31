import {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';



const App = () => {
    const [quotes, setQuotes] = useState([]);

    const fetchAdvice = () => {
    //using axios to get the data from the API then setting it into the state with setQuotes
    //put the link in an environment variable to hide it from prying eyes
    //.....just jokes....this is the API https://api.adviceslip.com/advice ... enjoy
        axios.get(`${process.env.REACT_APP_QUOTES_URL}`)
        .then((response) => {
            setQuotes(response.data.slip);
             
        })
        .catch((error) => {
            console.log(error);
        });
    }

//using this hook to ensure the API gets on load only then stops []
    useEffect(()=> {
        fetchAdvice();
    },[]);

    console.log(quotes);

    return(
        <div className="app">
            <div className="card">
            <h1 className="heading">{quotes.advice}</h1>
            <button className="button" onClick={fetchAdvice}><span>GIVE ME ADVICE!</span></button>
            </div>
        </div>
    );
}

export default App;