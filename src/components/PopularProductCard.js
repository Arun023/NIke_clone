import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="h-[280px] w-[280px] object-contain hover:animate-pulse duration-200" alt={name} />
      <div className="mt-8 flex justify-start gap-2.5">
        {[...Array(Math.round(rating))].map((res) => (
          <img src={star} alt="rating" width={24} height={24} />
        ))}
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="text-xl leading-4 mt-2 font-semibold font-montserrat">
        {name}
      </h3>
      <p className="text-2xl mt-2 font-semibold font-palanquin text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
