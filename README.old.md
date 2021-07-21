# Do This travel application featuring Deep Wild South tour agency
[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
This ecommerce site for administrators, tour operators and users to navigate the waters of tourism travel. Admins can add tour operators, 
tours, and modify user permissions. Users can browse tours, search by category or keyword, and finally schedule and pay for their excursion.   

In a future release, tour operators will easily be able to add or remove tours that they operate. 

[![Link to Deployed Application](./assets/jenshenshomepage.png)](https://do-this-travel.herokuapp.com/)



### Features
* Back-end utilizes Node.js with a MongoDB database 
    * Utilizes Mongoose as the Object Data Modeling solution
    * Server runs on NodeJS with routing handled by Express
    * JSON Web Tokens are utilized for user authentication in session storage
* Front-end is powered by React
    * Material UI provides the framework for many components throughout

* Calendly powers tour scheduling
    * Calendly powers the inline scheduling UI as well as sends tailored confirmation emails as dictated by admin/tour operator
    * Calendly API provides confirmation to the express server, which the server uses to wait for 30 minutes before checking that the user completed the booking 
    process and marking the appointment as paid or unpaid. 
* Paypal API provides a robust payment solution for users and admins

## Installation Instructions
To install this application, please follow the below instructions:  
1.  Clone by SSH or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  Create a `.env` file with keys for `MONGODB_URI` for your Atlas DB, `AWS_SECRET` `REGION` and `BUCKET` according to your AWS settings, and a `JWT_KEY` according
to your preferences
4.  When ready, type `npm start` in your terminal to launch `server.js`
5.  Navigate to `localhost:3000` or, if a different port is specified in your `.env` file, use that port
6.  You can then see changes to your website in real time and update functionality and change images/styling to your desires.

## Usage
This application is intended to be formatted according to Agencies wishing to offer an online presence for local tour operators


## License 
This project is licensed under the MIT License. Click the link below to learn more about how you can use this project.  
License: [MIT License](https://opensource.org/licenses/MIT)

## Contributors
Many thanks to those that contributed to this project:
* Chris Martinez
* Mark Artim
* Jay Yousef
* Stacy Martin
* Mim Armand
* Kat Poulos
* Andrew Hardemon
* And last, but not least - *Grogu*  
![Image of Grogu](https://upload.wikimedia.org/wikipedia/en/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg)

## Questions
### Questions or issues?  
Questions or issues should be raised either by emailing the developer at the links below or creating an Issue within Github using the Issues button at the top of the repository

You can also fork the repository, make some changes yourself and then create a pull request, make sure to comment why the PR is necessary and describe what changes you've made or it will be rejected.

### To contact me:
* Github: [cbmartinez42](https://github.com/cbmartinez42)  
* Email: [cbmartinez42@gmail.com](mailto:cbmartinez42@gmail.com)
* Github: [Mark Artim](https://github.com/mark-artim)  
* Email: [mark.artim@gmail.com](mailto:Mark.Artim@gmail.com)
* Github: [Jay Yousef](https://github.com/jayyousef)  
* Email: [jay.yousef@gmail.com](mailto:jay.yousef@gmail.com)
