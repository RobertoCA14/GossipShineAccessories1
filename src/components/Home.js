// HomePage.js
import React from "react";
import Carousel from "./Carousel";
import logoGossip1 from "../assets/logoGossip1.png";
import ftcri from "../assets/ftcri.jpeg";
import IMG_5888 from "../assets/IMG_5888.jpeg";

function HomePage() {
  return (
    <div className="homepage">
      {/* Encabezado visual con imagen de fondo */}
      <Carousel />

      {/* Imagen de logo y bloques informativos */}
      <div className="text-center p-8">
        <img
          src={logoGossip1}
          alt="Logo Gossip Shine"
          className="mx-auto mb-6 w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain rounded-lg shadow-md"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">
              Accesible
            </h3>
            <p>
              Diseños modernos para todos los gustos, con precios que se ajustan
              a tu estilo sin comprometer tu bolsillo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Versátil
            </h3>
            <p>
              Ideales para cualquier ocasión: desde salidas casuales hasta
              eventos especiales. Combina y brilla como quieras.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">
              Estilo Único
            </h3>
            <p>
              Cada accesorio refleja personalidad, elegancia y confianza. Porque
              tu look merece destacar.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de características */}
      <section className="features text-center mb-4">
        <div id="nosotro" className="bg-pink-500 text-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">
              ¿Por qué elegir nuestro Estilo?
            </h2>
            <h2 className="text-4xl font-bold mb-4">
              Gossip Shine Accessories
            </h2>
            <p className="mb-6">
              Gossip Shine Accessories es una marca dedicada a resaltar la
              belleza y la personalidad de cada persona a través de accesorios
              modernos, únicos y con estilo. Inspirada en la moda actual y las
              últimas tendencias, la marca busca ofrecer productos accesibles y
              de calidad que complementen cualquier look, promoviendo la
              autoexpresión y la confianza personal. Posicionar a Gossip Shine
              Accessories como una marca líder en el mercado de accesorios de
              moda, brindando productos de alta calidad, con diseños exclusivos
              que respondan a las necesidades y gustos de nuestros clientes.
            </p>
            <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Leer más
            </button>
          </div>
        </div>

        {/* Características del producto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
          <div className="bg-gray-300 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">Misión</h3>
            <p>
              Ofrecer accesorios innovadores y asequibles que permitan a
              nuestros clientes expresar su estilo personal y resaltar su brillo
              único en cada ocasión.
            </p>
          </div>

          <div className="flex items-center p-4 border rounded shadow-lg">
            <div
              className="w-1/3 h-32 bg-cover bg-center rounded-lg mr-4"
              style={{ backgroundImage: `url(${IMG_5888})` }}
            ></div>
            <div className="w-2/3">
              <p>
                Desarrollar colecciones que sigan las tendencias actuales de
                moda y estilo. Establecer una presencia sólida en redes sociales
                y plataformas digitales para aumentar la visibilidad de la
                marca.
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 border rounded shadow-lg">
            <div
              className="w-1/3 h-32 bg-cover bg-center rounded-lg mr-4"
              style={{ backgroundImage: `url(${ftcri})` }}
            ></div>
            <div className="w-2/3">
              <p>
                Implementar estrategias de marketing que fortalezcan el
                reconocimiento de la marca y fidelicen a nuestros clientes.
                Garantizar un servicio al cliente excepcional que genere
                experiencias positivas y repetidas compras. Expandir
                progresivamente la oferta de productos y puntos de venta a nivel
                nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section
        id="contacto"
        className="testimonials bg-yellow-50 p-8 rounded mb-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-yellow-800 mb-4">
          Opiniones de nuestras clientas
        </h2>

        <div className="testimonial-item text-yellow-900 mb-6">
          <p className="text-lg italic">
            "Los aretes que compré son espectaculares. Me hacen sentir única y
            siempre me preguntan dónde los conseguí."
          </p>
          <p className="font-bold mt-2">- Camila R.</p>
        </div>

        <div className="testimonial-item text-yellow-900 mb-6">
          <p className="text-lg italic">
            "Gossip Shine tiene los mejores accesorios. La calidad y el brillo
            son perfectos para cualquier outfit."
          </p>
          <p className="font-bold mt-2">- Paola G.</p>
        </div>

        <div className="testimonial-item text-yellow-900 mb-6">
          <p className="text-lg italic">
            "Me encantó la atención al cliente y la presentación. ¡Todo llegó
            hermoso!"
          </p>
          <p className="font-bold mt-2">- Valeria M.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
