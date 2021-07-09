import React, {useState, useEffect} from 'react'
import API from '../utils/API'

const Tour = (id) => {
    const [tourData, setTourData] = useState({});

    useEffect(() => {
        // fetch(infoUrl)
        API.findOneActivity(id)
        // .then(res => res.json())
        .then((response) => {
          setTourData(response.data || [])
        });
      }, [])

    return (
        <div>
            <h1>This page will show details of an individual tour.</h1>
        </div>
    )
}

export default Tour
