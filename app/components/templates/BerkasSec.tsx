import React from "react";
import BerkasList from "../organisms/BerkasList";

const BerkasSec = () => {
  return (
    <div className="py-10 flex flex-col gap-3 border-b border-gray-300">
      {/* Judul */}
      <h1 className="font-bold text-lg">Berkas Terbaru</h1>

      <BerkasList />
    </div>
  );
};

export default BerkasSec;
