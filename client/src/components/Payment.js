import React, { useState, useRef, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";

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

let token = "placeHolder from UseContext"

//functional component
function Payment(props) {
  //state which sets the paypal button to loading if it's slow
  const [isLoading, setIsLoading] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState=({})

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
                 //token comes from stateprovider 
          API.createNeworder({...order, token}).then(res=>console.log(res))
          .catch(error => console.log(error)).then(()=>{
          setOrderConfirmation(order);
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
