import React, { useRef, useEffect, useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
// import ReactDOM from "react-dom";
// import paypal from "paypal-checkout";
import { UserContext } from '../utils/UserContext';


//functional component
function Payment(props) {

  const { userInfo, setUserInfo } = useContext(UserContext);

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
                  value: props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(userInfo)
          if (userInfo === "NLI" || !userInfo || userInfo === undefined ) setUserInfo({"_id":"ERR: No user"});
          console.log("this is the order>>>>>>>>", order);
          API.createNewBooking({...props.tourObject, ...order, ...props.bookingDetails, "id":userInfo._id, "initialCost": props.initialCost, "total":props.total, "taxes":props.taxes}).then(res=>console.log("this is the response from the post request>>>>>",res))
          .catch(error => console.log(error)).then(()=>{
          // render thank you page
          history.push("/thankyou?" + props.tourObject._id +"?"+ props.bookingDetails.id);}
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
      <script defer src="https://www.paypal.com/sdk/js?client-id=ATxvRax9Nch26KWHgCSufUYPKEam7chfaqAjSpfpYJujcMLoedFqqQAhZMoM1-pAejEQsYyuKaavAJ2y"></script>
    </>
  );
}

export default Payment;
