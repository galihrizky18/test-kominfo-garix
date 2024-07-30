import Image from "next/image";
import React from "react";
import Logo from "@assets/assets/logo.svg";
import NavbarItems from "../molecules/NavbarItems";
import UserSection from "../molecules/UserSection";

const Navbar = () => {
  return (
    <nav className="px-[79px] py-[21px] flex flex-row justify-between items-center border-b border-gray-300">
      <div>
        <Image src={Logo} alt="logo" width={180} />
      </div>

      {/* Menu */}
      <div className="flex flex-row gap-3">
        {/* items */}
        <NavbarItems />

        {/* User Section */}
        <UserSection />
      </div>
    </nav>
  );
};

export default Navbar;
