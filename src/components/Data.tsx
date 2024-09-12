import React, { useState } from 'react'
import Form from './Form'
import Weather from './Weather'
import { base_url, api_key } from '../utils/constant'

interface WeatherInfo {
    city: string;
    country: string;
    temp: number;
    pressure: number;
    sunset: number;
}

const Data: React.FC = () => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | {}>({})
    const [message, setMessage] = useState<string>('Enter city name')

    const getWeather = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            const data = await response.json()
            const info: WeatherInfo = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }
            setWeatherInfo(info);
            setMessage('')
        } catch (e) {
            setMessage('Enter correct city name')
        }
    }

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weather={weatherInfo as WeatherInfo} />
        </div>
    )
}

export default Data