import React from 'react'
import styled from 'styled-components'

function Home() { 

    return (
        <div>
            <div className="h-72 ds:h-72 bg-white w-full">
                <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                    <div className="pt-8">
                        <p className="text-gray text-l ds:text-2xl">
                            What's on the menu?
                        </p>
                        <div className="pt-6">
                            <button className="bg-yellow py-3 px-6 mr-7 mb-5">
                                italian
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                indian
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                brazilian
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                chinese
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                portuguese
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                american
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                vietnamese
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7  mb-5">
                                spanish
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7 mb-5">
                                thai
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7 mb-5">
                                japenese
                            </button>
                            <button className="bg-yellow py-3 px-6 mr-7 mb-5">
                                mexican
                            </button>                           
                        </div>
                    </div>
                </div>            
            </div>
        </div>        
    )
}

export default Home

const Container = styled.div`
    margin: 0 auto;
`

const Banner = styled.div`
    background-color: white
    min-height: 140px;
    padding-left: 150px;
    padding-top: 150px;
    font-size: 25px;
`

const TitleLineOne = styled.div`
    color: rgb(255, 16, 96);
`

const TitleLineTwo = styled.div``

const Restaurants = styled.div`
    background-color: white;
    padding-left: 150px;
    padding-right: 100px;
    padding-top: 20px;
    font-size: 20px;
    display: flex;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 50px;
`

const RestaurantLogo = styled.div`
    img {
        width: 200px;
        height: 140px;
        object-fit: cover;
    }
`

const Name = styled.div`
    padding-left: 5px;
    padding-top: 15px;
    padding-bottom: 20px;
`

const RestaurantLineOne = styled.div`
    font-weight: 700;
    font-size: 19px;
`

const RestaurantLineTwo = styled.div`
    font-size: 16px;
`


