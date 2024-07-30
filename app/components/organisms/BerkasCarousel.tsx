"use client";
import React from "react";
import { Carousel } from "@mantine/carousel";
import ListBerkas from "@json/list-booking-by-username.json";
import BerkasCard from "../molecules/BerkasCard";

const BerkasCarousel = () => {
  const ListBooking = ListBerkas.bookings;
  return (
    <Carousel
      withIndicators
      height="100%"
      slideSize="33.333333%"
      slideGap="lg"
      loop
      align="start"
      slidesToScroll={4}
    >
      {ListBooking &&
        ListBooking.map((data, i) => (
          <Carousel.Slide
            key={i}
            className=" w-fit h-fit flex justify-center items-center"
          >
            <BerkasCard
              name={data.usernameBooking}
              bookingDate={data.booking[0].sessionId.start}
              field={data.sportsFieldId.sportsFieldName}
              bookingTime={data.booking[0].sessionId.title}
              status={data.bookingStatus}
            />
          </Carousel.Slide>
        ))}

      {/* ...other slides */}
    </Carousel>
  );
};

export default BerkasCarousel;
