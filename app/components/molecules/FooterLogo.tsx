import Image from "next/image";
import React from "react";

type FooterLogoProps = {
  img: string;
  title: string;
};

const FooterLogo = (props: FooterLogoProps) => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 w-36">
      <Image src={props.img} alt="" priority />
      <span className="text-wrap text-white text-xs">{props.title}</span>
    </div>
  );
};

export default FooterLogo;
