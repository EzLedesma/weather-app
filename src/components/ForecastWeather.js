import React from "react";

class ForecastWeather extends React.Component {
    render() {
        return <section>
            <h3>Forecast Weather</h3>
            <ul>
                <li>
                    <p>Lun</p>
                    <img src="" alt="icon" />
                    <div>min:</div>
                    <div>max:</div>
                </li>
                <li>
                    <p>Mar</p>
                    <img src="" alt="icon" />
                    <div>min:</div>
                    <div>max:</div>
                </li>
                <li>
                    <p>Mie</p>
                    <img src="" alt="icon" />
                    <div>min:</div>
                    <div>max:</div>
                </li>
            </ul>
        </section>
    }
}

export default ForecastWeather;