import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [ouvrir, setOuvrir] = useState(false);

  return (
    <div className="flex justify-between items-center p-5 md:px-10 bg-[#F5F5F5] border-b-2 border-b-[#FF0000] font-rosario font-bold fixed z-50 w-full">

      <a href="#">
        <h2 className="text-2xl md:text-3xl font-bold font-serif">
          AKE <span className="text-[#FF0000]">.Dev</span>
        </h2>
      </a>

      {/* MENU DESKTOP */}
      <ul className="hidden md:flex items-center gap-15">
        <a href="#stack" className="hover:text-[#FF0000] transition-all duration-300">
          <li>STACK</li>
        </a>

        <a href="#realisation" className="hover:text-[#FF0000] transition-all duration-300">
          <li>PROJETS</li>
        </a>

        <a href="#Apropos" className="hover:text-[#FF0000] transition-all duration-300">
          <li>A PROPOS</li>
        </a>

        <a href="#service" className="hover:text-[#FF0000] transition-all duration-300">
          <li>SERVICES</li>
        </a>
      </ul>

      {/* BOUTON CONTACT DESKTOP */}
      <div className="hidden md:block">
        <a href="#Contact">
          <button className="bg-[#FF0000] text-white py-2 px-5 rounded-sm cursor-pointer hover:bg-red-700 transition-all">
            ME CONTACTER
          </button>
        </a>
      </div>

      {/* MENU MOBILE BUTTON */}
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setOuvrir(true)}
      >
        <Menu size={35} />
      </button>

      {/* MENU MOBILE */}
      {
        ouvrir && (
          <div className="fixed top-0 right-0 w-full h-screen bg-[#ff00009d] backdrop-blur-sm flex flex-col p-8 z-50">

            {/* CLOSE BUTTON */}
            <div className="flex justify-end">
              <button
                className="cursor-pointer"
                onClick={() => setOuvrir(false)}
              >
                <X color="white" size={40} />
              </button>
            </div>

            {/* LIENS */}
            <ul className="flex flex-col gap-8 items-center justify-center flex-1 text-white text-lg">

              <a href="#stack" onClick={() => setOuvrir(false)}>
                <li>STACK</li>
              </a>

              <a href="#realisation" onClick={() => setOuvrir(false)}>
                <li>PROJETS</li>
              </a>

              <a href="#Apropos" onClick={() => setOuvrir(false)}>
                <li>A PROPOS</li>
              </a>

              <a href="#service" onClick={() => setOuvrir(false)}>
                <li>SERVICES</li>
              </a>

              <a href="#Contact" onClick={() => setOuvrir(false)}>
                <button className="bg-white text-[#FF0000] py-2 px-5 rounded-sm cursor-pointer font-bold">
                  ME CONTACTER
                </button>
              </a>

            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;