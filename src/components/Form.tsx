import React, { useState, FormEvent } from 'react';

interface FormProps {
    getWeather: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ getWeather }) => {
    const [city, setCity] = useState<string>('');
        
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather(city)
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                type='text' 
                name='city' 
                placeholder="Enter city"
            />
            <button type='submit'>Get weather</button>
        </form>
    )  
}

export default Form