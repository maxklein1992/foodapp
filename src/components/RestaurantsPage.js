import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Italian from './icons/italian.png';
import Asian from './icons/asian.png';
import Spanish from './icons/spanish.png';
import Brazilian from './icons/brazilian.png';
import All from './icons/allfood.png';
import { restaurants } from '../utils/data';
import Like from './icons/like.png';

function RestaurantsPage( {filteredCategory} ) { 
    const [drestaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [word, setWord] = useState(["All restaurants"])

    var AllFood = restaurants
    var ItalianFood = drestaurants.filter(e => e.typeOfFood === "Italian") 
    var AsianFood = drestaurants.filter(e => e.typeOfFood === "Asian") 
    var SpanishFood = drestaurants.filter(e => e.typeOfFood === "Spanish") 
    var BrazilianFood = drestaurants.filter(e => e.typeOfFood === "Brazilian") 

    function showFoodType(foodType) {
        switch (foodType) {
            case "allfood":
                setFilteredRestaurants(AllFood)
                setWord("All restaurants")                
                break;
            case "italian":
                setFilteredRestaurants(ItalianFood)
                setWord("Italian")                
                break;
            case "asian":
                setFilteredRestaurants(AsianFood)
                setWord("Asian")                
                break;     
            case "spanish":
                setFilteredRestaurants(SpanishFood)
                setWord("Spanish")                
                break;     
            case "brazilian":
                setFilteredRestaurants(BrazilianFood)
                setWord("Brazilian")          
                break;  
            default:
                break;
        }
    }

    async function fetchMyAPI() {
        setRestaurants(restaurants);
        if(filteredCategory)
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
                        <button onClick={() => showFoodType("allfood")} className="ml-16 flex flex-col items-center">
                            <img src={All} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                            <p className="pt-5 font-bold">
                                All
                            </p>
                        </button>
                        <button onClick={() => showFoodType("italian")} className="ml-16 flex flex-col items-center">
                            <img src={Italian} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                            <p className="pt-5 font-bold">
                                Italian
                            </p>
                        </button>
                        <button onClick={() => showFoodType("asian")} className="ml-16 flex flex-col items-center">
                            <img src={Asian} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                            <p className="pt-5 font-bold">
                                Asian
                            </p>
                        </button>
                        <button onClick={() => showFoodType("spanish")} className="ml-16 flex flex-col items-center">
                            <img src={Spanish} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                            <p className="pt-5 font-bold">
                                Spanish
                            </p>
                        </button>
                        <button onClick={() => showFoodType("brazilian")} className="ml-16 flex flex-col items-center">
                            <img src={Brazilian} alt="SearchIcon" className="bg-white h-12 w-12 p-1" />
                            <p className="pt-5 font-bold">
                                Brazilian
                            </p>
                        </button>
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
                                                    <img 
                                                        src={image}      
                                                        alt={alt}  
                                                        className="object-cover w-72 h-48"         
                                                    />
                                                </div>
                                                <div className="pt-4 pl-3">
                                                    <p className="text-yellow text-l">
                                                        {title}
                                                    </p>
                                                    <p className="text-gray text-sm mt-1">
                                                        {city}, {country}
                                                    </p>
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


