import React from "react";
import ProductsCard from "../molecules/ProductsCard";
import ProductsCarousel from "../organisms/ProductsCarousel";

const Products = () => {
  return (
    <div className="py-10 flex flex-col gap-3 border-b border-gray-300 ">
      {/* judul */}
      <h1 className="font-bold text-lg">Lapangan Dikota Palembang</h1>

      {/* Products */}
      <div className="">
        <ProductsCarousel />
      </div>
    </div>
  );
};

export default Products;
