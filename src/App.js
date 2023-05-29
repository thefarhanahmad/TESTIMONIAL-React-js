import React, { useState } from "react";
import Card from "./components/Card";
import reviews from "./data";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const App = () => {
  const [index, setIndex] = useState(0);

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function randomShiftHandler() {
    setIndex(Math.floor(Math.random(index) * reviews.length));
  }

  return (
    <div className="bg-slate-200 flex flex-col gap-8 relative justify-center items-center w-full h-screen">
      <h1 className="text-black font-bold text-3xl">Our Testimonials</h1>
      <div className="w-32 h-0.5 -mt-7 mb-4 bg-violet-600 mx-auto"></div>

      <Card data={reviews[index]} />

      <div className="relative -top-24">
        <div className="flex justify-center items-center gap-8 mb-3 ">
          <button onClick={leftShiftHandler}>
            <HiChevronLeft />
          </button>
          <button onClick={rightShiftHandler}>
            <HiChevronRight />
          </button>
        </div>
        <button
          onClick={randomShiftHandler}
          className="bg-violet-500 py-1 px-3  hover:bg-violet-600 transition-all duration-200 text-white rounded-md"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default App;
