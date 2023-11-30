import React from "react";
import WeatherCard from './WeatherCard'
function Location({data, location}){
    let main = data.find(city => city.city === location);
    console.log(main)
    return (
    <div>
    <WeatherCard data={main} />
    </div>)
}

module.exports = Location;
