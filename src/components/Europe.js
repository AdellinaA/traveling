import React, { Component } from 'react';
import Price from './Price';
import './style.css';
import axios from 'axios';


function fetchWeather() {
    return new Promise(async (res, rej) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Romania&aqi=no`);
            if (response && response?.data) {
                const result = response.data;
                const obj = {
                    location: result.location.name,
                    date: result.location.localtime,
                    temperature: {
                        celsius: result.current.temp_c,
                        fahrenheit: result.current.temp_f
                    }
                }
                res(obj);
            }
        }
        catch (err) {
            rej(err);
        }
    });
}


class Europe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            magicalStatus: '1000$',
            weather: null
        };

    }

    changeMagicalStatus() {
        this.setState({
            magicalStatus: '559$'
        })
    }

    checkTemperature() {
        fetchWeather().then(result => {
            this.setState({
                weather: result
            })
        });
    }

    render() {
        return (
            <div className='europeDiv'>
                <p>Making a Europe trip will cost {this.props.price}, you will have a nice experience during {this.props.days} and you will travel by {this.props.travelBy}</p>
                <p>Welcome to Europe {this.state.magicalStatus}!</p>
                <button onClick={() => this.changeMagicalStatus()}>Magical Discount %</button>
                <Price price={this.props.price} days={this.props.days} travelBy={this.props.travelBy} />

                <span>==============================================</span>
                <button onClick={() => this.checkTemperature()}>Check Temperature</button>
                {this.state.weather ? (<div>
                    <p>Time: {this.state.weather.date}</p>
                    <p>Location: {this.state.weather.location}</p>
                    <p>Temperature: {this.state.weather.temperature.celsius}°C / {this.state.weather.temperature.fahrenheit}ºF</p>
                </div>) : (<p>Nothing</p>)}
                <span>==============================================</span>
            </div>
        )
    }
}

export default Europe;