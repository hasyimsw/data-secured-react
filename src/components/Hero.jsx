import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] backgroundHero">
      <div className="max-w-[1240px] mx-auto px-4 grid">
        <div className="h-[100vh] flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white">Data</h1>
          <h1 className="text-5xl font-bold primaryColor">Secured</h1>
          <h1 className="text-5xl font-bold text-white">Protection</h1>
          <div className="mt-6">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
