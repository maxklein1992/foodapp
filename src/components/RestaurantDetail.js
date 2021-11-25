import { ListItem } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { restaurants } from '../utils/data';
import { useParams } from "react-router-dom";

function RestaurantsPage() { 
    
    const { id } = useParams();

    return (
        <div>
            <div className="w-full">
                <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                <div className="grid grid-cols-1 ds:grid-cols-4 gap-2 pt-8">
                            {restaurants.filter(restaurant => restaurant.id === id).map((restaurant) => {
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
                                                    className="object-cover w-full h-48"         
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
    )
}

export default RestaurantsPage


