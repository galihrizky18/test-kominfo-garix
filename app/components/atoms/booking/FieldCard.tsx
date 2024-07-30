import Image from "next/image";
import React from "react";
import FiledImg from "@assets/img/65b355b1c735d131289dd1dd.svg";

type FieldListProps = {
  img: string;
  title: string;
  address: string;
};

const FieldCard = (props: FieldListProps) => {
  return (
    <div className="flex flex-row  items-center gap-3 px-3 py-2 border border-gray-300 rounded-lg">
      {/* Img */}
      <div className="w-10 h-14 overflow-hidden rounded-lg">
        <Image
          src={props.img}
          alt="image"
          priority
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TExt */}
      <div className="flex flex-col text-sm">
        <h1 className=" font-semibold ">{props.title}</h1>
        <p className=" text-gray-400">{props.address}</p>
      </div>
    </div>
  );
};

export default FieldCard;
