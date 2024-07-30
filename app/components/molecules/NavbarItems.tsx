import Image from "next/image";
import React from "react";
import IconChart from "@assets/assets/icon-chart.svg";
import IconNotification from "@assets/assets/icon-notification.svg";

const NavbarItems = () => {
  return (
    <div className="flex flex-row px-7  border-r border-gray-400">
      <Image src={IconChart} alt="icon" width={40} />
      <Image src={IconNotification} alt="icon" width={40} />
    </div>
  );
};

export default NavbarItems;
