import React from "react";
import { Link } from "react-router-dom";
import Like from "./icons/like.png";

function RestaurantsPage({
  id,
  image,
  alt,
  title,
  city,
  country,
  reviewPercentage,
  numberOfReviews,
  typeOfFood,
  expensiveRate,
}) {
  return (
    <div className="w-full ds:mr-8 pb-4 ds:pt-0">
      <div>
        <Link to={`/restaurants/${id}`}>
          <img
            src={image}
            alt={alt}
            className="object-cover w-64 h-48 transform hover:scale-105 hover:opacity-80 ease-out duration-700 rounded-lg shadow-lg"
          />
          <div className="pt-4 pl-3">
            <p className="text-yellow text-l">{title}</p>
            <p className="text-gray text-sm mt-1">
              {city}, {country}
            </p>
          </div>
        </Link>
      </div>
      <div class=" flex flex-row pl-3 mt-2 items-center">
        <img
          src={Like}
          alt="Like"
          className="bg-white h-8 w-8 p-2 ds:p-1 ds:h-6 ds:w-6 ds:p-1"
        />
        <p className="text-xs text-yellow font-bold pl-1 pt-1/2 font-sans">
          {reviewPercentage}%
        </p>
        <p className="text-xs text-gray pl-1 pt-1/2 font-sans">
          ({numberOfReviews}) · {typeOfFood} · {expensiveRate}
        </p>
      </div>
    </div>
  );
}

export default RestaurantsPage;
