import React from 'react'
import { Link } from 'react-router-dom'
import { restaurants } from '../utils/data';
import Like from './icons/like.png';

function Home() { 

    return (
        <div>
            <div className="w-full">
                <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                    <div className="flex flex-col ds:flex-row ds:items-end ds:justify-between pt-8">
                        <p className="text-gray text-l ds:text-2xl">
                            Latest Restaurants
                        </p>
                        <a href="/restaurants" className="text-gray text-xs ds:text-xl underline mr-8">
                            See all
                        </a>
                    </div>
                    <div className="pt-6 flex flex-col ds:flex-row ds:justify-between">
                            {restaurants.slice(0, 4).map((restaurant) => {
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
                                );
                                })}
                    </div>  
                </div>            
            </div>
        </div>        
    )
}

export default Home