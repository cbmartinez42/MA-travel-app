const axios = require('axios')
const path = require('path')
require('dotenv').config();

const openWeatherKey=process.env.WEATHER_KEY

export default {
    browseAllActivities: function(){
        // const infoUrl = '/api/tours';
        // return fetch(infoUrl)
        return axios.get('/api/tour');

    },
    browseCategory: function(){
        const infoUrl = '/api/tour';
        return fetch(infoUrl);

    },
    searchAllActivities: function(){
        const infoUrl = '/api/tour';
        return fetch(infoUrl);
    },
    findOneActivity: function(id){
        // const infoUrl = '/api/tours/' + id;
        return axios.get('/api/tour/' + id);

    },
    signUpUser: function(newUserInfo){
        console.log('signUpUser was called from utils/API.js w/this payload:',newUserInfo);
        return axios.post('/api/user', newUserInfo);
    },
    login: function(info) {
        return axios.post('/api/user/login', info)
    },
    openWeather: function(cityName){
        console.log('API call was made to open weather for this city name',cityName);

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherKey}`);
    }
};
