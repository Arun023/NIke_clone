import React from "react";
import { offer } from "../../assets/images";
import Button from "../Button";
import { arrowRight } from "../../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Active Life
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Discover Stylish Nike Arrivals, Quality Comfort and Innovation for
          Active Life
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
