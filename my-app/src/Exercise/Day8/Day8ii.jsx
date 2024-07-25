import { useState, useEffect } from "react";
import axios from 'axios';
import './CSS/Day8ii.css'

const Day8ii = () => {
    const [data, setData] = useState([]);
    const [randomIdx, setRandomIdx] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://restcountries.com/v2/all'; 
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        setRandomIdx(Math.floor(Math.random() * data.length+1))
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const randomNo = () => {
        const random = Math.floor(Math.random() * data.length+1)
        setRandomIdx(random);
        console.log(random)
    }

    return (
        <div className="container">
            <div className="photo-container">
                <div className="img-container">
                    <img src={data[randomIdx]?.flag} alt="flag img" />
                </div>
            </div>
            
            <div className="country-name"> <p> {data[randomIdx]?.name.toUpperCase()} </p></div>
            <div className="info-container">
                <p> <b>Capital:</b> {data[randomIdx]?.capital}</p>
                <p> <b>Language:</b> {data[randomIdx]?.languages.map((lang) => lang?.name).join(', ')}</p>
                <p> <b>Population:</b> {data[randomIdx]?.population}</p>
                <p> <b>Currency:</b> {data[randomIdx]?.currencies.map((cur) => cur?.name).join(', ')}</p>
            </div>
            <div className="btn-container">
                <button onClick={randomNo}>Change Country</button>
            </div>
        </div>
            
    );
};

export default Day8ii;