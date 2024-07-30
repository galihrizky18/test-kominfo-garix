"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import ListLapangan from "@json/list-lapangan.json";
import ProductsCard from "../molecules/ProductsCard";

const ProductsCarousel = () => {
  return (
    <Carousel
      withIndicators
      height="100%"
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={4}
    >
      {ListLapangan &&
        ListLapangan.map((data, i) => (
          <Carousel.Slide
            key={i}
            className=" w-fit h-fit flex justify-center items-center"
          >
            <ProductsCard
              img={data.image}
              title={data.sportsFieldName}
              category={data.sportsFieldCategory}
              address={data.sportsFieldAddress}
              link={data.map}
            />
          </Carousel.Slide>
        ))}

      {/* ...other slides */}
    </Carousel>
  );
};

export default ProductsCarousel;
