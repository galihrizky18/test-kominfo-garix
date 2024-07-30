"use client";
import React from "react";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import BookingPlaceSec from "../organisms/BookingPlaceSec";

const BookingStepper = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div>
      <Stepper active={active} onStepClick={setActive} className="">
        <Stepper.Step label="First step" description="Pilih Waktu Dan Tempat">
          <BookingPlaceSec />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Informasi Pemesan">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Pembayaran">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
};

export default BookingStepper;
