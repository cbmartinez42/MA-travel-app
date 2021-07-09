import React from 'react'
import {useRef, useState} from 'react';
import {Input, Grid, FormGroup,FormControlLabel, FormHelperText, FormControl, InputLabel, FormLabel, Button, TextField} from '@material-ui/core';


const Operator = () => {
    const [fileInput, setUploadedFile] = useState(null);
    const [imageUploaded, setImageUploaded] = useState(null);
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
            //set the response image to image uploaded
            //we're showing the image here
            const res = await response.json();
            
            setImageUploaded(res.imageUrl);
            
        }else{
            console.log("mas problemo")
        }
    }
    return (
      <>
      {/* // <div className={classes.root}>
      // <Grid container spacing={1}>
      //   <Grid container item xs={12} spacing={3}>
      //     <FormRow /> */}
      {/* //   </Grid> */}
      {/* // </div> */}


      {/* // <div> */}
        <h3 className="admin-header">Tour Operator Admin Page</h3>

        {/* <Grid container direction="column" justify="space-evenly" alignItems="flex-start"> */}
        
        <FormControl className="tour-input-form" encType="multipart/form-data">

          {/* <InputLabel htmlFor="company-name">Tour Company Name</InputLabel> */}
          <TextField id="company-name" type='text' aria-describedby="Tour Company Name" label="Tour Company Name"></TextField>

          {/* <InputLabel htmlFor="email">Email address</InputLabel> */}
          <TextField id="email" type="email" aria-describedby="Email address" label="Email Address"></TextField>
          <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>

          {/* <InputLabel htmlFor="activity-name">Activity Name</InputLabel> */}
          <TextField id="activity-name" type='text' aria-describedby="Activity Name" label="Activity Name"></TextField>

          {/* <InputLabel htmlFor="file-input">
                Select a file to upload here
                </InputLabel> */}

          <Input
            type="file" id="file" name="file" inputProps={{ multiple: true }}
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
        </FormControl>
        {/* </Grid> */}
        {imageUploaded ? 
        <img className="AWSimage" alt="Uploaded Pic" src={imageUploaded}></img> : <></> }
      {/* // </div> */}
      </>
    );
}

export default Operator
