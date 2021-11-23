import React from 'react'
import styled from 'styled-components'
import { kitchens } from '../utils/data';
import { Link } from 'react-router-dom'

function Home() { 

    return (
        <div>
            <div className="h-72 ds:h-72 bg-white w-full">
                <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                    <div className="pt-8">
                        <p className="text-gray text-l ds:text-2xl">
                            What's on the menu?
                        </p>
                        <Link
                            to={{
                                pathname: "/restaurants",
                                state: { category: "Brazilian" },
                            }}
                        >
                            Go to courses
                        </Link>
                        <div className="pt-6 flex flex-col flex-wrap ds:flex-row">
                            {kitchens.map((kitchen) => {
                                const {
                                    type,
                                } = kitchen;
                                return (
                                    <Link
                                        to={{
                                            pathname: "/restaurants",
                                            state: { category: type },
                                        }}
                                        className="bg-yellow py-3 px-6 mr-7 mb-5"
                                    >
                                        {type}
                                    </Link>                    
                                );
                                })}
                        </div>  
                    </div>
                </div>            
            </div>
        </div>        
    )
}

export default Home