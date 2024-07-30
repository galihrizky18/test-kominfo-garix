import React from "react";
import FeatureCard from "../molecules/FeatureCard";

const MainHeader = () => {
  return (
    <div className="py-10 border-b border-gray-300">
      {/* Title */}
      <div>
        <h1 className="font-bold text-lg">
          Selamat Datang Dibooking Online Kota Palembang
        </h1>
      </div>

      {/* Card Sec */}
      <div className="flex flex-row justify-start p-3 px-3">
        <FeatureCard />
      </div>
    </div>
  );
};

export default MainHeader;
