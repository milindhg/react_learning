import React, { Component } from 'react'

const Location = () => (
    <div className="location_wrapper">
        <iframe 
            src="https://www.google.com/maps/place/Bombay+Chaat+House/@37.4052682,-122.0112165,12z/data=!4m8!1m2!2m1!1sChaat+House!3m4!1s0x0:0x159fefc94e28ea08!8m2!3d37.4235143!4d-121.9045973" 
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            
        ></iframe>
        <div className="location_tag">
            <div>
                Location
            </div>
        </div>
    </div>
)

export default Location;