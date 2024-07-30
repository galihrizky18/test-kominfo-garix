import React from "react";
import { Radio, Group } from "@mantine/core";
import FieldList from "../../molecules/booking/FieldList";

const Col2 = () => {
  return (
    <div className="py-5 flex flex-col gap-10">
      {/* Jenis Pennyewaan */}
      <div className="flex flex-col gap-3 justify-start">
        <h1 className="text-base font-semibold">Pilih Jenis Penyewaan</h1>

        <div>
          <Radio.Group name="jenisLayanan" withAsterisk>
            <Group>
              <Radio label="Per Sesi" value="sessionBooking" color="#F58465" />
              <Radio label="Per Event (ex: pameran)" value="eventBooking" />
            </Group>
          </Radio.Group>
        </div>
      </div>

      {/* Lapangan */}
      <div className="flex flex-col">
        <h1 className="text-base font-semibold">Pilih Lapangan</h1>

        {/* Field List */}
        <div className="py-3">
          <FieldList />
        </div>
      </div>

      {/* Waktu PEmesanan */}
    </div>
  );
};

export default Col2;
