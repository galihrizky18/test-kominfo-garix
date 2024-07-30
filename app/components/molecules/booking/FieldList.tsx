import React from "react";
import FieldCard from "../../atoms/booking/FieldCard";
import { title } from "process";

const FieldList = () => {
  const data = [
    {
      img: "/img/65b355b1c735d131289dd1dd.svg",
      title: "Lapangan Kamboja",
      address: "Mayor Santoso, Palembang",
    },
    {
      img: "/img/65b3556cc735d131289dd1d8.svg",
      title: "Laprangan Bola Hatta",
      address: "Taman Siswa, Palembang",
    },
    {
      img: "/img/65b3637a0f10a34f68b001cd.svg",
      title: "Laprangan Bulu Tangkis Cempako",
      address: "26 Ilir, Palembang",
    },
    {
      img: "/img/65b35303c735d131289dd1c7.svg",
      title: "Laprangan Tenis Bhakti",
      address: "Jl. Eka Bhakti, Palembang",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {data.map((data, i) => (
        <FieldCard
          key={i}
          img={data.img}
          title={data.title}
          address={data.address}
        />
      ))}
    </div>
  );
};

export default FieldList;
