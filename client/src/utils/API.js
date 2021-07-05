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

    }
};
