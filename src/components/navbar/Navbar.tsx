import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center font-bold py-4 text-[#FF5D8F] bg-[#F5F5F5]">
        <div className="container flex justify-between text-lg">
          <div className="flex">
            <Link to='/home' className="text-2xl font-bold">
              Health <span className="text-[#094E86]">Up</span>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar