'use client'
import React from "react";
import SafetyReview from "./safetyReview";
import { RxCross2 } from "react-icons/rx";
import CommunicationReview from "./communication";
import RecommendationReview from "./recommendation";
import Praise from "./praise";
  const Home = () => {
  return (
    <div className="flex flex-col items-center md:py-10  ">
      <div className="bg-slate-50 px-10 rounded-md">
        <div className="gap-4 py-10">
          <RxCross2 className="text-2xl" />
          <h1 className="text-2xl font-bold text-gray-900">Leave a review</h1>
          <div>
            <SafetyReview />
            <CommunicationReview />
            <RecommendationReview />
            <Praise/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
