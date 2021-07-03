import React from 'react'
import {useRef, useState} from 'react';
import {Input, FormGroup,FormControlLabel, FormHelperText, FormControl, InputLabel, FormLabel, Button, TextField} from '@material-ui/core';


const Operator = () => {
    const [fileInput, setUploadedFile] = useState(null);
    const handleInput = async () =>{
        console.log("uploading file", fileInput)
        //we need to append the form to a multipart formdata to send it over to multer
        const form = new FormData();
        form.append("image_file", fileInput);
        
        /**here would be the api call to multer */
        const response = await fetch("/photos/upload/", {
            method: "POST",
            body: form
        })
        if(response.ok){
            console.log("FILE SENT")
        }else{
            console.log("mas problemo")
        }
    }
    return (
      <div>
        <h1>CRUD screen for Operators</h1>
        <FormControl>

          {/* <InputLabel htmlFor="my-input">Tour Company Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />

          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

          <InputLabel htmlFor="my-input">Activity Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" /> */}

          {/* <InputLabel htmlFor="file-input">
                Select a file to upload here
                </InputLabel> */}

          <Input
            id="file-input"
            type="file"
            onChange={(e) => setUploadedFile(e.target.files[0])}
          ></Input>
          <Button
            variant="contained"
            onClick={() => {
              handleInput();
            }}
          >
            Upload
          </Button>
        </FormControl>
      </div>
    );
}

export default Operator
