import React from 'react';
import HeaderDark from '../../HeaderDark';
import LatestRestaurants from '../../LatestRestaurants';
import MenuCategories from '../../MenuCategories';

function Home() {
  return (
    <>
      <HeaderDark />
      <LatestRestaurants />
      <MenuCategories />
    </>
  );
}

export default Home;