import React from "react";
import FooterPemkot from "@assets/img/footer-pemkot.svg";
import FooterKominfo from "@assets/img/footer-kominfo.svg";
import FooterBse from "@assets/img/footer-bse.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-3 px-5 flex justify-center items-center      bg-gradient-to-t from-[#274D84] via-[#2976A3] to-[#2A90B8]">
      <div className="flex flex-row gap-5">
        <Image src={FooterPemkot} alt="icon" width={100} priority />
        <Image src={FooterKominfo} alt="icon" width={150} priority />
        <Image src={FooterBse} alt="icon" width={80} priority />
      </div>
    </div>
  );
};

export default Footer;
