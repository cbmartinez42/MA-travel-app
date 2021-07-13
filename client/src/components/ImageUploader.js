import React from "react";
import { useRef, useState } from "react";
import { Input, Button } from "@material-ui/core";

const TourImages = (props) => {
  const [fileInput, setUploadedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [formInfo, setFormInfo] = useState(null);


  const handleInput = async () => {
    console.log("uploading file", fileInput);
    //we need to append the form to a multipart formdata to send it over to multer
    const form = new FormData();
    form.append("image_file", fileInput);



    /**here would be the api call to multer */
    const response = await fetch("/photos/upload/", {
      method: "POST",
      body: form,
    });
    if (response.ok) {
      console.log("FILE SENT");
      //set the response image to image uploaded
      //we're showing the image here
      const res = await response.json();

      setImageUploaded(res.imageUrl);
    } else {
      console.log("mas problemo");
    }
  };
  return (
    <div>
      <Input
        type="file"
        id="file"
        name="file"
        inputProps={{ multiple: true }}
        onChange={(e) => setUploadedFile(e.target.files)}
      ></Input>
      <Button
        variant="contained"
        onClick={() => {
          handleInput();
        }}
      >
        Upload
      </Button>
      {imageUploaded ? (
        <img className="AWSimage" alt="Uploaded Pic" src={imageUploaded}></img>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TourImages;
