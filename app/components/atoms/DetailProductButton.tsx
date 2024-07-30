import Image from "next/image";
import React from "react";
import IconArrow from "@assets/assets/icon-arrow.svg";
import Link from "next/link";

const DetailProductButton = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className="flex flex-row justify-between  py-1 text-[#F58465] "
    >
      <h1 className="font-bold text-sm">Lihat Lapangan</h1>

      <Image src={IconArrow} alt="icon" />
    </Link>
  );
};

export default DetailProductButton;
