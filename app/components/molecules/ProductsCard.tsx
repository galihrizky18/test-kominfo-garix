import Image from "next/image";
import React from "react";

import DetailProductButton from "../atoms/DetailProductButton";
import Badge from "../atoms/Badge";

type ProductsCardProps = {
  img: string;
  category: string;
  title: string;
  address: string;
  link: string;
};

const ProductsCard = (props: ProductsCardProps) => {
  return (
    <div className="flex flex-col pb-2 gap-2 w-[230px] shadow-md">
      {/* Image */}
      <Image
        src={`/img/${props.img}.svg`}
        alt="image"
        width={200}
        height={200}
      />

      <div className="px-3 flex flex-col gap-2">
        {/* Badge */}
        <Badge title={props.category} />
        {/* address */}
        <div className="text-sm text-gray-600 text-wrap">{props.address}</div>

        {/* Button */}
        <DetailProductButton link={props.link} />
      </div>
    </div>
  );
};

export default ProductsCard;
