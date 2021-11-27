import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { restaurants } from '../utils/data';
import { kitchens } from '../utils/data';
import Like from './icons/like.png';

function RestaurantsPage( {filteredCategory} ) { 
    const [drestaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [word, setWord] = useState(["All restaurants"])

    function showFoodType(type, name) {
        if(type !== "All")
        {
            setFilteredRestaurants(restaurants.filter(e => e.typeOfFood === type));
            setWord(name)     
        } else {
            setFilteredRestaurants(restaurants);
            setWord(name)  
        }
    }

    async function fetchMyAPI() {
        setRestaurants(restaurants);
        if(filteredCategory && filteredCategory !== "All")
        {
            setFilteredRestaurants(restaurants.filter(e => e.typeOfFood === filteredCategory));
            setWord(filteredCategory)
        } else {
            setFilteredRestaurants(restaurants)
        }
    }

    React.useEffect(() => {
        fetchMyAPI();
      }, [])

    return (
        <div>
            <div className="w-full">
                <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                    <div className="grid grid-cols-2 ds:grid-cols-10 gap-2 pt-32 ds:pt-8 font-sans font-bold">
                    {kitchens.map((kitchen) => {
                                    const {
                                        type,
                                        name
                                    } = kitchen;
                                    return (
                                        <button onClick={() => showFoodType(type, name)} className="ml-16 flex flex-col items-center">
                                            <img src={require('./icons/categories/' + type + '.png').default} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                                            <p className="pt-5 font-bold">
                                                {type}
                                            </p>
                                        </button>
                                    );
                        })                           
                    } 
                    </div>
                    <div className="pt-14">
                        <p className="text-gray text-l ds:text-2xl">
                            {word}
                        </p>
                        <div className="grid grid-cols-1 ds:grid-cols-4 gap-2 pt-8">
                            {filteredRestaurants.length === 0 ? <p>No restaurants available</p> : 
                                filteredRestaurants.map((restaurant) => {
                                    const {
                                        id,
                                        title,
                                        alt,
                                        image,
                                        city,
                                        country,
                                        reviewPercentage,
                                        numberOfReviews,
                                        typeOfFood,
                                        expensiveRate,
                                    } = restaurant;
                                    return (
                                        <div className="w-full ds:mr-8 pb-4 ds:pt-0">
                                            <div className="">
                                                <div>
                                                    <Link
                                                        to={`/restaurants/${id}`}
                                                    >
                                                        <img 
                                                            src={image}      
                                                            alt={alt}  
                                                            className="object-cover w-72 h-48"         
                                                        />
                                                        <div className="pt-4 pl-3">
                                                            <p className="text-yellow text-l">
                                                                {title}
                                                            </p>
                                                            <p className="text-gray text-sm mt-1">
                                                                {city}, {country}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div class=" flex flex-row pl-3 mt-2 items-center">
                                                    <img src={Like} alt="Like" className="bg-white h-8 w-8 p-2 ds:p-1 ds:h-6 ds:w-6 ds:p-1" />
                                                    <p className="text-xs text-yellow font-bold pl-1 pt-1/2 font-sans">
                                                        {reviewPercentage}%
                                                    </p>
                                                    <p className="text-xs text-gray pl-1 pt-1/2 font-sans">
                                                        ({numberOfReviews}) · {typeOfFood} · {expensiveRate}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>                        
                                    );
                                })                           
                            } 
                        </div> 
                    </div> 
                </div>            
            </div>
        </div>        
    )
}

export default RestaurantsPage


