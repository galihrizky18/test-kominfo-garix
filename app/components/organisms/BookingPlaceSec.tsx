import Image from "next/image";
import React from "react";
import IconDate from "@assets/assets/icon-booking.svg";
import Col1 from "./booking/Col1";
import Col2 from "./booking/Col2";

const BookingPlaceSec = () => {
  return (
    <div className="py-3 flex flex-col items-center ">
      {/* Head */}
      <div className="w-full flex flex-col justify-center items-center">
        <Image src={IconDate} alt="icon" width={85} />
        <h1 className="font-semibold text-lg">Booking Lapangan Segera!</h1>
      </div>

      {/* body */}
      <div className="flex flex-row mt-5 gap-3 text-sm">
        {/* col1 */}
        <div className="bg-white w-[514px] rounded-sm px-5 py-3 shadow-sm">
          <Col1 />
        </div>

        {/* col2 */}
        <div className="bg-white w-[514px] rounded-sm px-5 py-3 shadow-sm">
          <Col2 />
        </div>
      </div>
    </div>
  );
};

export default BookingPlaceSec;
