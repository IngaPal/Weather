import React from 'react'

interface WeatherInfo {
    city: string;
    country: string;
    temp: number;
    pressure: number;
    sunset: number;
}

interface WeatherProps {
    weather: WeatherInfo;
    message: string;
}

const Weather: React.FC<WeatherProps> = ({ weather, message }) => {
    return (
        <div className='infoWeath'>
            {!message && Object.keys(weather).length > 0 && (
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            )}
            <p>{message}</p>
        </div>
    )
}

export default Weather