import React from "react";
import { useState } from "react";
import { restaurants } from "../utils/data";
import { kitchens } from "../utils/data";
import RestaurantCard from "./RestaurantCard";

function RestaurantsPage({ filteredCategory }) {
  const [drestaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [word, setWord] = useState(["All restaurants"]);

  function showFoodType(type, name) {
    if (type !== "All") {
      setFilteredRestaurants(restaurants.filter((e) => e.typeOfFood === type));
      setWord(name);
    } else {
      setFilteredRestaurants(restaurants);
      setWord(name);
    }
  }

  async function fetchMyAPI() {
    setRestaurants(restaurants);
    if (filteredCategory && filteredCategory !== "All") {
      setFilteredRestaurants(
        restaurants.filter((e) => e.typeOfFood === filteredCategory)
      );
      setWord(filteredCategory);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }

  React.useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
          <div className="grid grid-cols-2 ds:grid-cols-10 gap-2 pt-32 ds:pt-8 font-sans font-bold">
            {kitchens.map((kitchen) => {
              const { type, name } = kitchen;
              return (
                <button
                  onClick={() => showFoodType(type, name)}
                  className="ml-16 flex flex-col items-center"
                >
                  <img
                    src={require("./icons/categories/" + type + ".png").default}
                    alt="SearchIcon"
                    className="bg-white h-12 w-12 p-1"
                  />
                  <p className="pt-5 font-bold">{type}</p>
                </button>
              );
            })}
          </div>
          <div className="pt-14">
            <p className="text-gray text-l ds:text-2xl">{word}</p>
            <div className="grid grid-cols-1 ds:grid-cols-4 gap-2 pt-8">
              {filteredRestaurants.length === 0 ? (
                <p>No restaurants available</p>
              ) : (
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
                    <RestaurantCard
                      id={id}
                      title={title}
                      alt={alt}
                      image={image}
                      city={city}
                      country={country}
                      reviewPercentage={reviewPercentage}
                      numberOfReviews={numberOfReviews}
                      typeOfFood={typeOfFood}
                      expensiveRate={expensiveRate}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsPage;
