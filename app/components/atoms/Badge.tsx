import React from "react";

const Badge = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#F58465] w-fit text-center px-3 py-1 text-white text-xs rounded-lg">
      {title}
    </div>
  );
};

export default Badge;
