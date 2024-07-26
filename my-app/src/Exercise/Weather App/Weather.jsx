import React, { useState } from 'react'
import './Style.css'
import axios from 'axios'
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={'bfc25d1dbdecbd4312bccac83a8dd4b9'}





const Weather = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState('')

    const fetchWeather = async () => {
        const url = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfc25d1dbdecbd4312bccac83a8dd4b9`
        try{
            const result = await axios.get(url);
            setData(result)
            console.log(result);
            console.log(result.data.name)
        }catch(error){
            console.log("Error occured in fetching API", error);
        }
    }

    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className='container'>
            <div className="input-container">
                <input type="text" placeholder='Enter City Name'onChange={handleInputChange}/>
            </div>
            <div className='btn-container'>
                <button onClick={fetchWeather} > Get Weather </button>
            </div>
            <div className='location'>
                {data &&  <h2>{data.data.name}</h2>}
            </div>
            <div>
                {data &&  <p>Temp is {data.data.main.temp}</p>}
            </div>
            <div>
                {data &&  <p>{data.data.weather.map((weather)=> weather.main).join(', ')}</p>}
            </div>
        </div>
    )
}

export default Weather