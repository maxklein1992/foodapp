import React from "react";

function MenuItemCard({ id, image, alt, title, price }) {
  return (
    <div className="w-full ds:mr-8 pb-4 ds:pt-0">
      <div>
        <img
          src={image}
          alt={alt}
          className="object-cover w-64 h-48 transform hover:scale-105 ease-out duration-700 rounded-lg shadow-lg"
        />
        <div className="pt-4 pl-3 w-64 flex flex-col">
          <p className="text-yellow text-xs w-full h-8">
            {id}. {title}
          </p>
          <p className="text-gray text-sm mt-1 font-medium font-sans h-8">
            € {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
