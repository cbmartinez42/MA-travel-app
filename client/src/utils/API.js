const axios = require("axios");
// const path = require('path')
require("dotenv").config();

const openWeatherKey = process.env.WEATHER_KEY;

let API = {
  browseAllActivities: function () {
    // const infoUrl = '/api/tours';
    // return fetch(infoUrl)
    return axios.get("/api/tour");
  },
  browseCategory: function (category) {
    // const infoUrl = '/api/tour/:category';
    // return fetch(infoUrl);
    return axios.get("/api/tour/:category");
  },
  searchAllActivities: function () {
    const infoUrl = "/api/tour";
    return fetch(infoUrl);
  },
  findOneActivity: function (id) {
    // const infoUrl = '/api/tours/' + id;
    return axios.get("/api/tour/" + id);
  },
  findOneBooking: function (email) {
    console.log('this is hitting API findOneBooking')
    return axios.get("/api/booking/email/"+email);
  },
  browseAllUsers: function () {
    return axios.get("/api/user");
  },
  login: function (info) {
    return axios.post("/api/user/login", info);
  },

    signUpUser: function(newUserInfo){
        console.log('signUpUser was called from utils/API.js w/this payload:',newUserInfo);
        return axios.post('/api/user', newUserInfo);
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
        return axios.put('/image/'+tourId, form)
    },
    createNewTourOperator: function(newTourOperatorInfo){
        console.log('createNewTour was called from utils/API.js w/this payload:',newTourOperatorInfo);
    return axios.post("/api/operator", newTourOperatorInfo);
  },
  updateUser: function (id, role) {
    return axios.put("/api/user/" + id, { role: role });
  },
  //TODO: need to add this external API to our back end before the Browse->Results data is pushed back to the front end
  //maybe implement a loading feature on browse in case it takes more than one or two seconds to finish all the calls
  //we may also need to handle what happens if we reach maximum number of calls, though i don't remember the maximum calls for the free version of OpenWeatherAPI
  getTourOperators: function () {
    return axios.get("/api/operator");
  },
  //this logic needs to be handled on the backend
  openWeather: function (cityName) {
    console.log(
      "API call was made to open weather for this city name",
      cityName
    );
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherKey}`
    );
  },

  createNewBooking: function (obj) {
    console.log("a new booking was creating with this info ->", obj);
    let street2 = obj.addressStreet2 ? obj.addressStreet2 : "";
    let phone=obj.phone ? obj.phone : "";
    const formattedInfo = {
      travellerName: obj.firstName,
      userID: obj.id,
      address: {
        street: obj.addressStreet,
        street2: street2,
        city: obj.addressCity,
        state: obj.addressState,
        zip: obj.addressZip,
      },
      activity: obj._id,
      phone: phone,
      email: obj.email,
      specialRequirements: obj.specialRequirements,
      participants: obj.participants,
      initialCost: obj.initialCost,
      otherFees: obj.taxes,
      totalCost: obj.total,
    };

    return axios.post("/api/booking", formattedInfo);
  },
  createNeworder: function (newOrderInfo) {
    console.log(
      "a new order was created with this information->>>>>>>",
      newOrderInfo
    );
    return axios.post("/api/order", newOrderInfo);
  },
};

export default API;
