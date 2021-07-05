const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config()

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dothisdb", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const toursSeed = [
  {
      // "_objectid": 1,
      "tourName": "Snorkeling and Beach BBQ",
      "tourOperator": "Kaimani Marine Tours",
      "departureLocation": {
          "street": "74 Front Street",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "kaimanimarine@gmail.com",
      "description": "Visit three pristine snorkel sites and then enjoy a Creole-seafood BBQ on a private beach.  In the afternoon; you can either be a beach bum, snorkel from shore, do some birding, or visit our active coconut farm where we are crazy for coconuts!",
      "tourLocation": "Snake Cayes",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "8:00 am",
      "duration": "8 hours",
      "cost": "75",
      "additionalFees": "5 per person park fee to be paid at the ranger station",
      "maxCapacity": "36",
      "minCapacity": "4",
      "keywords": "snorkel, BBQ, sustainable tours, Creole, coconuts, organic farm, beach, birding",
      "image": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/71953075_985119908493884_4204831742231576576_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=KGfodiTT4QQAX-wcjzk&_nc_ht=scontent-ort2-1.xx&oh=30225a7f20d08b37c91fee3c91aeeb00&oe=60E65009"
  },
  {
      // "_objectid": 2,
      "tourName": "Deep Sea Fishing",
      "tourOperator": "Kaimani Marine Tours",
      "departureLocation": {
          "street": "74 Front Street",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "kaimanimarine@gmail.com",
      "description": "Get out into the wild side, pass the Belize Barrier reef and hunt the big ones.  Regular catches include kingfish, tuna, wahoo, barracuda and more!!  Your guide will be an OG Toledo firsherman born and bred fishing these indulgent southern waters, you are guaranteed an experience of a lifetime!!",
      "tourLocation": "Sapodilla Cayes",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "6:00 am",
      "duration": "12 hours",
      "cost": "$400",
      "additionalFees": "$10 per person park fee to be paid at the ranger station",
      "maxCapacity": "4",
      "minCapacity": "1",
      "keywords": "deep-sea fishing, fishing, sustainable tours",
      "image": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/62254076_901954876810388_8070366496917815296_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1CLue8kUjWEAX9n_rqr&_nc_ht=scontent-ort2-1.xx&oh=a35dee0c3399f5d4880f8f6fc9afaf32&oe=60E6D1B5"
  },
  {
      // "_objectid": 3,
      "tourName": "Creole Drumming and Cooking Immersion",
      "tourOperator": "Maroon Creole Drum School",
      "departureLocation": {
          "street": "Joe Taylor Creek Road",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "pricklypeartat2@hotmail.com ",
      "description": "Think you have no rhythm?  Think again, drumming master Emmeth Young brings out the beat in anyone!!  You will be swayed into these Afro-Caribbean rhythms and then seduced by Miss Jill's firehearth cooking where you can try your hand at authentic Creole cooking.  You will end the day with a satisfied belly and spirit!",
      "tourLocation": "Maroon Creole Drum School",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "10:00 am, 4:00 pm",
      "duration": "3 hours",
      "cost": "$55",
      "additionalFees": "none",
      "maxCapacity": "22",
      "minCapacity": "2",
      "keywords": "cultural immersion, sustainable tours, Creole, Belize culture, drumming, cooking",
      "image": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/36628780_673610536311491_7302831845140332544_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=vdQJ0BriPCcAX9Lm7fP&_nc_ht=scontent-ort2-1.xx&oh=3eaaa5d724734d441c30aafd0617da6c&oe=60E70B96"
  },
  {
      // "_objectid": 4,
      "tourName": "Mayan Cultural Immersion",
      "tourOperator": "The Living Maya Experience",
      "departureLocation": {
          "street": "Southern Highway, Big Falls bridge",
          "street2": "",
          "city": "Big Falls",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "livingmayaexperience@gmail.com",
      "description": "A cultural home visit that offers guests a fascinating glimpse into a fast disappearing in which the local Kek'chi Mayas depend upon the forest and found everything in it to satisfy their needs from food to furniture to medicine.",
      "tourLocation": "Big Falls",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "8:00 am, 11:00 am, 2:00 pm, 5:00 pm",
      "duration": "3 hours",
      "cost": "$40",
      "additionalFees": "none",
      "maxCapacity": "16",
      "minCapacity": "1",
      "keywords": "cultural immersion, Mayan, cooking, Belizean culture, traditional tours, sustainable tours",
      "image": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/82871999_2702838859803568_5675642811710439424_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0RSz6Ow4qBYAX_GDQU6&_nc_oc=AQlxrXzBKQiGtI7dPIntSC4r44c6AoLyptHh-Yj6X4Cti8HNJkAswtenPP1W1LrzdlE&tn=k2ioV7zW_2Z7XexV&_nc_ht=scontent-ort2-1.xx&oh=5b3912abe20f31658c6022a3faf64d3d&oe=60E68FC4"
  }
  ]
  

db.Tours
  .remove({})
  .then(() => db.Tours.collection.insertMany(toursSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! Have fun storming the castle!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
