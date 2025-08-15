import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center font-bold py-4 text-[#c7a170] bg-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/home" className="text-3xl font-bold">
            Health <span className="text-[#213e60]">Up</span>
          </Link>
          <div className="flex gap-4 text-[#213e60] text-xl">
            <Link to="/categorias" className="hover:text-[#c7a170]">
              Categorias
            </Link>
          </div>
            <button className="bg-[#213e60] hover:bg-[#c7a170] text-white text-xl py-2 px-4 rounded-4xl">
              <Link to="/cadastrarcategoria" className="">
                Cadastrar
              </Link>
            </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
