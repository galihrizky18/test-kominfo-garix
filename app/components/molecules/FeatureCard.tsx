import Image from "next/image";
import React from "react";
import IconBoking from "@assets/assets/icon-booking.svg";
import Link from "next/link";

const FeatureCard = () => {
  return (
    <Link
      href={"/booking"}
      className="px-7 py-3 flex flex-col gap-2 items-center justify-center shadow-md "
    >
      <Image src={IconBoking} alt="icon" />
      <p className="text-sm">Booking Lapangan</p>
    </Link>
  );
};

export default FeatureCard;
