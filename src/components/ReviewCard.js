import React from "react";
import { star } from "./../assets/icons/index";

const ReviewCard = ({ feedback, rating, customerName, imgURL }) => {
  return <div className="flex justify-center items-center flex-col max-w-md mx-auto bg-white rounded shadow-md p-4 transition-transform ease-in-out duration-300 transform hover:scale-105">
    <img src={imgURL} alt="customer" className="w-32 h-32 rounded-full" />
    <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
    <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0 " />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
    </div>
    <h3 className="font-palanquin text-center font-bold mt-1 text-3xl">{customerName}</h3>
  </div>;
};

export default ReviewCard;
