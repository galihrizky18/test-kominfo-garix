import React from "react";
import BookingStepper from "../components/templates/BookingStepper";
import Navbar from "../components/organisms/Navbar";

const BookingPage = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* body */}
      <div className="py-10 px-40 h-full bg-[#F5F6FA]">
        <BookingStepper />
      </div>
    </div>
  );
};

export default BookingPage;
