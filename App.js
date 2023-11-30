import React from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard'
import cities from './data';
import Form from './components/Form';
import { useState } from 'react';
import Location from './components/Location'

function App() {
    const [location, setLocation] = useState("Los Angeles")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>

            <div className = "app">
                {/* <Form /> */}
                <Location data={cities} location={location} />
                {cities.map(city => (
                    <WeatherCard data={city}/>
                ))}



            </div>

        </>
    )
}

export default App;
