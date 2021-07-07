import React, { useState } from "react";
import Results from "../components/Results";
import { InlineWidget } from "react-calendly";

const Book = ({ searchData, setSearchData }) => {

      /*
 Company =>  tours  (3) Same Calendar Different times
 1) Company A (1) Calendar  3 events A,B,C
*/

const [url, setUrl] = useState();

let style = {
  btn: { padding: 15, margin: 10 }
};
    return (
        <div>
                  <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/30min")}>
        {" "}
        Tour 1{" "}
      </button>
      <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/60min")}>
        {" "}
        Tour 2{" "}
      </button>
      <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/snorkel-and-beach-bbq")}>
        {" "}
        Snorkel and BBQ{" "}
      </button>
      
      {url ? (
        <InlineWidget url={url} />
      ) : (
        <h5 style={{ color: "blue" }}> Select tour type to see details</h5>
      )}

      <Results searchData={searchData} setSearchData={setSearchData} />
        </div>
    )
}

export default Book