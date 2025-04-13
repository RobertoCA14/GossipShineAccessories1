import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Arete1copy from "../assets/Arete1copy.jpeg";
import IMG_5887 from "../assets/IMG_5887.jpeg";
import Cadenas1 from "../assets/Cadenas1.jpeg";
import VariosAretescopy from "../assets/VariosAretescopy.jpeg";

function ProductCarousel() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-full mx-auto">
      {isButtonVisible && (
        <button
          className="absolute bg-red-500 text-white px-8 py-4 rounded z-50 hover:scale-105 transition duration-300"
          style={{ top: "20px", left: "20px" }}
          onClick={() => (window.location.href = "/store")}
        >
          Compra Ahora
        </button>
      )}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {/* Slide 2 */}
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${IMG_5887})`,
            height: "85vh",
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold"></h2>
          </div>
        </div>
        {/* Slide 1 */}
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${Arete1copy})`,
            height: "85vh",
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-5xl font-bold">¡Haz que miren dos veces!</h1>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${Cadenas1})`,
            height: "85vh",
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold">Estilo que deslumbra.</h2>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${VariosAretescopy})`,
            height: "85vh",
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Más que accesorios, una actitud.
            </h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
