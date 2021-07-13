const axios = require('axios')
const path = require('path')
require('dotenv').config();

const openWeatherKey=process.env.WEATHER_KEY

let API = {
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
    browseAllUsers: function(){
        return axios.get('/api/user');
    },
   login: function(info){
        return axios.post('/api/user/login', info)
    },
    createNewTour: function(newTourInfo){
        console.log('createNewTour was called from utils/API.js w/this payload:',newTourInfo);
        const form = new FormData();

        let keyNames = Object.keys(newTourInfo);
       
        for(let i = 0; i < keyNames.length; i++){
            form.append(keyNames[i], newTourInfo[keyNames[i]])
            console.log(newTourInfo[keyNames[i]])
        }
        return axios.post('/api/tour', newTourInfo);

    },
    addTourImg: function(tourId, img){
        const form = new FormData()
        console.log(img)
        form.append("image_file", img)
        return axios.post('/photos/upload', form)
    },
    createNewTourOperator: function(newTourOperatorInfo){
        console.log('createNewTour was called from utils/API.js w/this payload:',newTourOperatorInfo);

        return axios.post('/api/operator', newTourOperatorInfo);

    },
    getTourOperators: function() {
        return axios.get('/api/operator')
    },
    openWeather: function(cityName){
        console.log('API call was made to open weather for this city name',cityName);

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherKey}`);

    }
};

export default API;