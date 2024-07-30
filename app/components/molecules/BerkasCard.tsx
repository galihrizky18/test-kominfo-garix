import Image from "next/image";
import React from "react";
import IconDate from "@assets/assets/icon-date.svg";
import Badge from "../atoms/Badge";

type BerkasCardProps = {
  name: string;
  bookingDate: string;
  field: string;
  bookingTime: string;
  status: string;
};

const BerkasCard = (props: BerkasCardProps) => {
  const dateBooking = new Date(props.bookingDate);
  const timeBooking = new Date(props.bookingTime);

  const dateBook = dateBooking.getDate();
  const timeBook = timeBooking.getTime();
  return (
    <div className="px-2 flex flex-col w-[396px]">
      {/* Col1 */}
      <div className="py-2 flex flex-row border-b border-gray-300">
        {/* Icon */}
        <div>
          <Image src={IconDate} alt="icon" width={30} />
        </div>

        <div>
          {/* Name */}
          <h1 className="font-bold text-base">{props.name}</h1>

          <span className="text-gray-400 text-sm">{dateBook}</span>
        </div>
      </div>

      {/* Col 2 */}
      <div className="py-2 flex flex-row justify-between items-center">
        <div className="flex flex-col pl-7">
          <div className="font-bold text-base">{props.field}</div>

          <div className="text-gray-300 text-sm">{timeBook}</div>
        </div>

        {/* badge Status */}
        <Badge title={props.status} />
      </div>
    </div>
  );
};

export default BerkasCard;
