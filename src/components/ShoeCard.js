import React from "react";

const ShoeCard = ({ image, changeShoeImage, shoeImage }) => {
    
  const handleClick = () => {
    if (shoeImage !== image.bigShoe) {
      changeShoeImage(image.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        shoeImage === image.bigShoe ? "border-red-500" : "border-transparent"
      } cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={image.bigShoe}
          alt="shoe Collection"
          width={127}
          className="object-contain"
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
