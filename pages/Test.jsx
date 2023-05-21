import React, { useEffect } from 'react';
import axios from 'axios';


const Test = () => {

    useEffect(() => {

        const fetchData = async() => {
            const options = {
                method: 'GET',
                url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
                headers: {
                  'X-RapidAPI-Key': '8555f40c8amsh35980fef2aaf81ap151800jsn5856c9e73828',
                  'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
              } catch (error) {
                  console.error(error);
              }
        }
        fetchData()

    }, [])
  return (
    <div>
      <h1>Testing...</h1>
    </div>
  )
}

export default Test;



       
