

function Home() {
  return (
    <>
      <div className="min-h-80 bg-[#F5F5F5] flex justify-center">
        <div className="container grid grid-cols-2 text-[#094E86]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Remédios </h2>
            <p className="text-xl">Aqui você encontra tudo o que precisa</p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-[#FF5D8F] border-[#FF5D8F] border-solid border-2 py-2 px-4">
                Categorias
              </div>
            </div>
          </div>
          <div>
            <div className="h-100 bg-[#1F5E91] w-2/3">teste</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home