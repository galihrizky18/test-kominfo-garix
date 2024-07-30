import Image from "next/image";
import Navbar from "./components/organisms/Navbar";
import MainHeader from "./components/templates/MainHeader";
import Products from "./components/templates/Products";
import BerkasSec from "./components/templates/BerkasSec";
import Footer from "./components/templates/Footer";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Bodu */}
      <div className="px-32 ">
        {/* Header */}
        <MainHeader />

        {/* Products */}
        <Products />

        {/* Berkas Terbaru */}
        <BerkasSec />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
