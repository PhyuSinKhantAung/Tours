import React, { useState } from "react";

const Tour = ({ tour, id, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="rounded bg-white shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={tour.image}
          alt="tour-img"
          className="w-full h-48 sm:h-52 object-cover"
        />
        <span className="absolute top-0 right-0 bg-yellow-700 text-yellow-50 p-2 rounded-bl">
          {tour.price} $
        </span>
      </div>
      <footer className="p-6">
        <div className="">
          <h1 className="font-bold text-lg tracking-widest mb-2">
            {tour.name}
          </h1>
        </div>
        <p className="text-yellow-800 text-base">
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          {/* {tour.info} */}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-lg text-yellow-500 font-semibold ml-1"
          >
            {readMore ? "See less" : "Read more"}
          </button>
        </p>

        <div className="px-14">
          <button
            className="hover:text-white hover:bg-red-500 rounded border border-red-600 border-1 text-red-600 text-center w-full mt-6 "
            onClick={() => removeTour(id)}
          >
            Not interested
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Tour;
