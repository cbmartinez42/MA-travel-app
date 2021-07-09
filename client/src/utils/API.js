const axios = require('axios')

export default {
    browseAllActivities: function(){
        // const infoUrl = '/api/tours';
        // return fetch(infoUrl)
        return axios.get('/api/tours')

    },
    browseCategory: function(){
        const infoUrl = '/api/tours';
        return fetch(infoUrl)

    },
    searchAllActivities: function(){
        const infoUrl = '/api/tours';
        return fetch(infoUrl)

    },
    signUpUser: function(newUserInfo){
        console.log('signUpUser was called from utils/API.js w/this payload:',newUserInfo);
        return axios.post('/api/user', newUserInfo);
    }
};
