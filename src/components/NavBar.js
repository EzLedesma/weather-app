import React from "react";
import logo from './../assets/weatherLogo.svg';

class NavBar extends React.Component {
    render() {
        return <nav>
            <div>
                <img src={logo} className="weatherApp-logo" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>Forecast</li>
                <li>Settings</li>
            </ul>
        </nav>
    }
}

export default NavBar;