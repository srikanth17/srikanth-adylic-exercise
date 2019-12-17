import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/styles.scss';

const axios = require('axios');
const { Tracker } = require('./utils/Tracker');

export class CityTracker {
    constructor() {
        this.dayTemperature = new Tracker();
        this.nightTemperature = new Tracker();
        this.humidity = new Tracker();
        this.APP_ID = '65e10e097be404fd1226ae7b06b53f2e';
        this.city = 'London';
    }

    fetchAPI() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&cnt=5&appid=${this.APP_ID}`).then(d => {
            d.data.list.forEach(l => this.dayTemperature.setValue(l.main.temp_max));
            d.data.list.forEach(l => this.nightTemperature.setValue(l.main.temp_min));
            d.data.list.forEach(l => this.humidity.setValue(l.main.humidity));
            const day = {
                minTemp: this.dayTemperature.getMin(),
                maxTemp: this.dayTemperature.getMax(),
                mean: this.dayTemperature.getMean(),
                mode: this.dayTemperature.getMode()
            };
            const night = {
                minTemp: this.nightTemperature.getMin(),
                maxTemp: this.nightTemperature.getMax(),
                mean: this.nightTemperature.getMean(),
                mode: this.nightTemperature.getMode()
            };
            const humidity = {
                minTemp: this.humidity.getMin(),
                maxTemp: this.humidity.getMax(),
                mean: this.humidity.getMean(),
                mode: this.humidity.getMode()
            };
            ReactDOM.render(<App day={day} night={night} humidity={humidity}/>, document.getElementById('app'));
        });
    }
}

new CityTracker().fetchAPI();