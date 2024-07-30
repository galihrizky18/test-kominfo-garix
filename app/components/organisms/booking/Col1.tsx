"use client";
import Image from "next/image";
import React from "react";
import LogoDispora from "@assets/img/logo-dispora.svg";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";

const Col1 = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div className="py-5 flex flex-col gap-5 justify-center items-center">
      {/* Head */}
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={LogoDispora} alt="logo" />
        <span className=" text-sm">
          Pilih Tanggal Booking Lapangan yang Anda Inginkan
        </span>
      </div>

      {/* body */}
      <div className="">
        <DatePicker value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Col1;
