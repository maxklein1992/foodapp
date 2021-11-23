import React from 'react';
import HeaderLight from '../../HeaderLight';
import RestaurantsPage from '../../RestaurantsPage';
import { useLocation } from 'react-router-dom'

function Restaurants() {
  const location = useLocation()
  const filteredCategory = location.state?.category

  return (
    <>
      <HeaderLight />
      <RestaurantsPage
        filteredCategory={filteredCategory}
      />
    </>
  );
}

export default Restaurants;