import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DogDetail = () => {
    const params = useParams();
    const { breed } = params
    //console.log(params)
    const [dog, setDog] = useState({});


    useEffect(()=> {

      const fetchData = async() => {
          const options = {
              method: 'GET',
              url: `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${breed}`,
              headers: {
                'X-RapidAPI-Key': '8555f40c8amsh35980fef2aaf81ap151800jsn5856c9e73828',
                'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
              }
            }; 
            console.log(options.url)
            try {
                const response = await axios.request(options);
                console.log(response.data)
                const dogData = (response.data[0]);
                await setDog(dogData)
                
            } catch (error) {
                console.error(error);
            }
      }
      fetchData()

  }, [breed])
      
      const { meta, img, origin, url} = dog;
        console.log(dog)
  return (
    <div className='van-detail-container'>
             {console.log(dog)} 

            {dog ? 
            (<div className='van-detail'>
                <h2>{breed}</h2>
                <img src={img} alt={breed} style={{height: 500, width: 600}}/>
                <h2 className='dog-origin'> Origin: {origin}</h2>
                <div className='van-price'>
                        <h3>Physical Features</h3>
                        <p>Coat: {meta?.coat}</p>
                        <p>Notes: {meta?.notes}</p>
                        <a href={url}>
                            <button>Learn More About Breed</button>
                        </a>
                        {/* <p>Dog height: {meta.height.dogs? meta.height.dogs : meta.height }</p>
                        <p>Dog weight: {meta.weight.dogs? meta.weight.dogs : meta.weight }</p>
                        <p>Bitch height: {meta.height.bitches? meta.height.bitches : meta.height }</p>
                        <p>Bitch weight: {meta.weight.bitches? meta.weight.bitches : meta.weight }</p>
                        <p>Coat: {meta?.notes}</p> */}
                </div>

            </div>)
                : <h1>Loading...</h1>}
                
    </div>
  )
}

export default DogDetail
