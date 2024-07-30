import Image from "next/image";
import React from "react";
import UserIcon from "@assets/assets/user-profile.svg";

const UserSection = () => {
  return (
    <div className="flex flex-row text-sm gap-3 items-center">
      <div className="flex flex-col">
        <h1 className="font-bold">Harry Maguire, S. Kom</h1>
        <p className="text-[#5A5A5A]">NIK : 167121312412313</p>
      </div>
      <div>
        <Image src={UserIcon} alt="User Icon" />
      </div>
    </div>
  );
};

export default UserSection;
