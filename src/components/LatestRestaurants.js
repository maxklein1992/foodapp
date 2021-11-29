import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../utils/data";
import Like from "./icons/like.png";
import RestaurantCard from "./RestaurantCard";

function Home() {
  return (
    <div>
      <div className="w-full">
        <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
          <div className="flex flex-col ds:flex-row ds:items-end ds:justify-between pt-8">
            <p className="text-gray text-l ds:text-2xl">Latest Restaurants</p>
            <a
              href="/restaurants"
              className="text-gray text-xs ds:text-xl underline mr-8"
            >
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
