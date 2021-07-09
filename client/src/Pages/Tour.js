import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import API from '../utils/API';
import Button from '../components/Button'

const Tour = () => {
    const [tourData, setTourData] = useState({});
    const {id} = useParams();
    useEffect(() => {
        // fetch(infoUrl)
        API.findOneActivity(id)
        // .then(res => res.json())
        .then((response) => {
          setTourData(response.data || {})
          console.log('tourData >>>', tourData)
        });
      }, [])

    return (
        <div>
            <h1>This page will show details of an individual tour.</h1>
            <Button 
              text="Book this!"
            />
            <p>{tourData.tourName}</p>
        </div>

    )
}

export default Tour
