

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center font-bold py-4 text-[#FF5D8F] bg-[#F5F5F5]">
        <div className="container flex justify-between text-lg">
          <div className="flex">
            Health <span className="text-[#094E86]">Up</span>
          </div>
          <div className="flex gap-4">
            Temas
            Cadastrar
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar