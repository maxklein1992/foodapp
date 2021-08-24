import React from 'react'
import styled from 'styled-components'
import { restaurants } from '../utils/data';

function Home() { 

    return (
        <Container>
            <Banner>
                <TitleLineOne>
                    Restaurants
                </TitleLineOne>
            </Banner> 
            <Restaurants>
                {restaurants.map((restaurant) => {
                    const {
                        id,
                        title,
                        alt,
                        image,
                        location,
                      } = restaurant;
                      return (
                          <Item>
                            <RestaurantLogo>
                                <img 
                                    src={image}      
                                    alt={alt}           
                                />
                            </RestaurantLogo>
                            <Name>
                                <RestaurantLineOne>
                                    {title}
                                </RestaurantLineOne>
                                <RestaurantLineTwo>
                                    {location}
                                </RestaurantLineTwo>
                            </Name>
                          </Item>                        
                      );
                    })}
            </Restaurants>              
        </Container>
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
    font-weight: 700;    
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


