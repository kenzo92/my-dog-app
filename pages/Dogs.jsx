import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Dogs  ()  {
    const [ dogs, setDogs ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect(()=> {

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
                  setDogs(response.data);
                  //console.log(response.data)
              } catch (error) {
                  console.error(error);
              }
        }
        fetchData()

    },[])

    const handleChange = (event) => {
        //check the value of the input supplied by user
        console.log (event.target.value)
        //update the initial state of query with the input value supplied by user 
        setSearchQuery(event.target.value)
    }

    console.log(searchQuery)

    //use the input value supplied by the user to filter out the dog breed names that matches from the dogs array
    const filteredDogs = dogs.filter((dog) => {
        return dog.breed.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    }) 

    //map over the filteredDogs array returned to display filtered dogs in the JSX via the dogElements
    const dogElements = filteredDogs.map((dog) => {
        const { id, breed, img, origin } = dog;
    //    console.log(dog[0])
    //     const dogHeight = dog?.meta?.height?.dogs
    //     const bitchHeight = dog?.meta?.height?.bitches
        const color = dog?.meta?.colour  || " "
        return (
            <div key={id} className='van-tile'>
                    <img src={img} alt={breed} style={{height:180, width:150 }}/>
                    <h3>breed: {breed}</h3>
                    <p>Origin: {origin}</p>
                    <Link to={`/dogs/${breed}`}>See more</Link>
            </div>
           
        );
    });

  return (
            <div className='van-list-container'>
                <h1>Explore our different Dog breeds</h1>
                <input type='text'
                 className='dogs-search'
                 placeholder='Search your favorite Dog pet by breed'
                 onChange={handleChange}
                 />
                <div className='van-list'>
                     {dogElements}
                </div>
                
            </div>
  )
  
}
