const axios = require('axios')
// const path = require('path')
require('dotenv').config();

const openWeatherKey=process.env.WEATHER_KEY

let API = {
    browseAllActivities: function(){
        // const infoUrl = '/api/tours';
        // return fetch(infoUrl)
        return axios.get('/api/tour');

    },
    browseCategory: function(category){
        // const infoUrl = '/api/tour/:category';
        // return fetch(infoUrl);
        return axios.get('/api/tour/:category')

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
        // form.append("file", newTourInfo.file);
        // form.append("tourName", newTourInfo.tourName);
        // form.append("tourOperator", newTourInfo.tourOperator);
        // form.append("departureLocation.street", newTourInfo.departureLocation.street);
        // form.append("departureLocation.street2", newTourInfo.departureLocation.street2);
        // form.append("departureLocation.city", newTourInfo.departureLocation.city);
        // form.append("departureLocation.state", newTourInfo.departureLocation.state);
        // form.append("departureLocation.zip", newTourInfo.departureLocation.zip);
        // form.append("email", newTourInfo.email);
        // form.append("description", newTourInfo.description);
        // form.append("tourLocation", newTourInfo.tourLocation);
        // form.append("cancellationPolicy", newTourInfo.cancellationPolicy);
        // form.append("startTimes", newTourInfo.startTimes);
        // form.append("duration", newTourInfo.duration);
        // form.append("cost", newTourInfo.cost);
        // form.append("additionalFees", newTourInfo.additionalFees);
        // form.append("maxCapacity", newTourInfo.maxCapacity);
        // form.append("minCapacity", newTourInfo.minCapacity);
        // form.append("keywords", newTourInfo.keywords);
        // form.append("category", newTourInfo.category);
        // form.append("image", newTourInfo.image);

        return axios.post('/api/tour', form);

    },
    createNewTourOperator: function(newTourOperatorInfo){
        console.log('createNewTour was called from utils/API.js w/this payload:',newTourOperatorInfo);

        return axios.post('/api/operator', newTourOperatorInfo);

    },
    //TODO: need to add this external API to our back end before the Browse->Results data is pushed back to the front end
    //maybe implement a loading feature on browse in case it takes more than one or two seconds to finish all the calls
    //we may also need to handle what happens if we reach maximum number of calls, though i don't remember the maximum calls for the free version of OpenWeatherAPI
    getTourOperators: function() {
        return axios.get('/api/operator')
    },
    //this logic needs to be handled on the backend
    openWeather: function(cityName){
        console.log('API call was made to open weather for this city name',cityName);
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherKey}`);
    },

    createNewBooking: function(newBookingInfo){
        console.log('a new booking was creating with this info ->',newBookingInfo)
        return axios.post('/api/booking',newBookingInfo)
    },
    createNeworder: function (newOrderInfo){
        console.log('a new order was created with this information->>>>>>>',newOrderInfo)
        return axios.post('/api/order',newOrderInfo)
    }
};

export default API;