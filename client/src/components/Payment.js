import React, { useState, useRef, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";
import { UserContext } from '../utils/UserContext';


// id: "0BJ9970162510971R", intent: "CAPTURE", status: "COMPLETED", purchase_units: Array(1), payer: {…}, …}
// create_time: "2021-07-11T19:52:17Z"
// id: "0BJ9970162510971R"
// intent: "CAPTURE"
// links: [{…}]
// payer: {name: {…}, email_address: "jay.yousef-buyer@gmail.com", payer_id: "MAUWEF6NHJ9ZY", address: {…}}
// purchase_units: [{…}]
// status: "COMPLETED"
// update_time: "2021-07-11T19:52:34Z"

// ORDER MODEL:
// payPalId: String,    
// dateOfPurchase: String,
// purchaser: String,
// tourName: String,
// participants: Number,


//functional component
function Payment(props) {


  const { userInfo, setUserInfo } = useContext(UserContext);


  //testing the funtionality with no user
  if (userInfo=="NLI") {
    setUserInfo({"_id": "no user"})
   }


  const history = useHistory();

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: props.name,
                amount: {
                  value: props.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("this is the order>>>>>>>>", order);
          API.createNewBooking({...order, ...props.bookingDetails, "id":userInfo._id}).then(res=>console.log(res))
          .catch(error => console.log(error)).then(()=>{
          // render thank you page
          history.push("/thankyou?" + props.tourData._id +"?"+order.id);}
          )},
        onError: (err) => {
          console.log(err);
        },
  })
      .render(paypal.current);
}, [])


  return (
    <>
      <div>
        <div onClick={()=>console.log(userInfo)}>CLICK THIS BOX</div>
        <div ref={paypal}></div>
      </div>
      {/* <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    /> */}
    </>
  );
}

export default Payment;
