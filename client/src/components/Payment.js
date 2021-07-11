import React, {useState} from "react";
// import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import API from "../utils/API";
import ReactDOM from "react-dom"
import paypal from 'paypal-checkout'

//import paypal info
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

//styles info
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

//functional component
function Payment() {
    //state which sets the paypal button to loading if it's slow
    const [isLoading, setIsLoading] = useState(false);




  const createOrder = (data, actions) =>{
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    };
  
    //onApprove doTHIS!!
    const onApprove = (data, actions) => {
        console.log("order approved!")
      return actions.order.capture();
    };

  return (
      <>
   {/* <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    /> */}

    
  </>


  )
};

export default Payment;