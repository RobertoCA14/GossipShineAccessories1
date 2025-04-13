// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-pink-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo o Nombre de la Compañía */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Gossip Shine Accessories</h1>
        </div>

        {/* Menú */}
        <div className="menu">
          <h2 className="text-lg font-semibold mb-2 text-yellow-400">Menú</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#nosotro" className="hover:underline">
                Quiénes Somos
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Productos
              </a>
            </li>

            <li>
              <a href="/#contacto" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="contact">
          {/* <h2 className="text-lg font-semibold mb-2 text-yellow-400">
            Contacto
          </h2> */}
          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Santo
            Domingo, Rep. Dom.
          </p>

          <p className="flex items-center mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Santiago
            de los Caballeros, Rep. Dom.
          </p>

          <p className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            florangelparedes120212@gmail.com
          </p>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="social-icons flex justify-center space-x-4 mt-8">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" />
        </a>
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
        </a>
        <a
          href="https://youtube.com"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/gossip_shine_accesories?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-white"
          />
        </a>
      </div>

      {/* Derechos Reservados */}
      <div className="text-center text-sm text-gray-200 mt-4">
        © 2025 Gossip Shine Accessories, Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
