import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import logoGossip1 from "../assets/logoGossip1.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Barra superior con lema */}
      <div className="bg-red-100 py-1 text-yellow-600 text-sm font-semibold text-center tracking-wide">
        Brilla con actitud, destaca con estilo.
      </div>

      {/* Contenedor principal */}
      <nav className="flex items-center justify-between px-4 md:px-10 bg-orange-50 text-yellow-900">
        {/* Logo y nombre */}
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={logoGossip1}
            alt="Logo"
            className="w-16 h-auto object-contain"
          />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-lg font-bold text-yellow-600">
              Gossip Shine Accessories
            </h1>
            <span className="text-xs text-rose-500">
              Al servicio de <strong>tu</strong> estilo.
            </span>
          </div>
        </div>

        {/* Menú navegación */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center md:space-x-6 font-semibold text-sm md:text-md`}
        >
          <Link to="/" className="hover:text-yellow-600 px-2">
            INICIO
          </Link>
          <a href="/#nosotro" className="px-4 hover:text-yellow-600">
            NOSOTROS
          </a>
          <Link to="/store" className="hover:text-yellow-600 px-2">
            TIENDA
          </Link>
          <Link to="/ShoppingCart" className="hover:text-yellow-600 px-2">
            CARRITO
          </Link>
          <a href="/#contacto" className="px-4 hover:text-yellow-600">
            CONTÁCTANOS
          </a>
        </div>

        {/* Íconos */}
        <div className="flex items-center space-x-4">
          <button className="text-yellow-800 hover:text-yellow-600">
            <FaSearch size={18} />
          </button>
          <button
            className="md:hidden text-yellow-800 hover:text-yellow-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
