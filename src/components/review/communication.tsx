"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";
const CommunicationReview = () => {
  const [ratingValue, setRatingValue] = React.useState<number>(0);
  React.useEffect(() => {
    const rating = localStorage.getItem("CommunicationRating");
    if (rating) {
      setRatingValue(parseInt(rating));
    }
  }, []);
  const handleRating = (rate: number) => {
    localStorage.setItem("CommunicationRating", rate.toString());
    setRatingValue(rate);
  };
  //console.log(ratingValue);
  return (
    <div className="pt-10 flex flex-col">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Communication</h2>
        <h3 className=" capitalize">
          How do you feel about our safety Features ?
        </h3>
        <div>
          <Rating
            disableFillHover
            onClick={handleRating}
            initialValue={ratingValue}
            SVGclassName={" inline-block"}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunicationReview;
