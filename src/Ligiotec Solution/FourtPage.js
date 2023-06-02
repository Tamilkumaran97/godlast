import React from "react";

const FourtPage = () => {
  return (
    <div data-scroll data-scroll-direction="horizontal" className="relative ">
      <div className="sticky top-0 h-screen bg-red-500 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">first page</h1>
        </div>
      </div>
      <div className="sticky top-0 h-screen bg-indigo-500 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">second page</h1>
        </div>
      </div>
      <div className="sticky top-0 h-screen bg-yellow-500 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">second page</h1>
        </div>
      </div>
      <div className="sticky top-0 h-screen bg-green-500 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">second page</h1>
        </div>
      </div>
      <div className="sticky top-0 h-screen bg-orange-500 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">second page</h1>
        </div>
      </div>
    </div>
  );
};

export default FourtPage;
