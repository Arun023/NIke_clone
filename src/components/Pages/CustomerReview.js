import React, { useEffect, useState } from "react";
import { reviews } from "../../constants";
import ReviewCard from "../ReviewCard";
const CustomerReview = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const autoplayDelay = 2000; // Delay in milliseconds between slides
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  useEffect(() => {
    // Start autoplay when component mounts
    const interval = setInterval(() => {
      const nextIndex = (currentTestimonial + 1) % reviews.length;
      setCurrentTestimonial(nextIndex);
    }, autoplayDelay);
    setAutoplayInterval(interval);

    // Clean up when component unmounts
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentTestimonial]);

  const handleTestimonialClick = (index) => {
    setCurrentTestimonial(index);
    clearInterval(autoplayInterval);
  };
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our? <span className="text-coral-red">Customer</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear Genuie Story From Customer About Their Experience
      </p>
      <div className="mt-20">
        <ReviewCard
          feedback={reviews[currentTestimonial].feedback}
          rating={reviews[currentTestimonial].rating}
          customerName={reviews[currentTestimonial].customerName}
          imgURL={reviews[currentTestimonial].imgURL}
        />
      </div>
      <div className="flex-1 flex justify-evenly mt-24 items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => {
          const isActive = index === currentTestimonial;
          return (
            isActive && (
              <button
                key={review.customerName}
                onClick={() => handleTestimonialClick(index)}
                className={`mx-2 w-4 h-4 rounded-full ${
                  isActive ? "bg-gray-800" : "bg-gray-300"
                }`}></button>
            )
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReview;
