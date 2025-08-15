import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-80 bg-[#F5F5F5] flex justify-center relative">
        <img
          src="https://ik.imagekit.io/taelipsvolt/imagemfarmacia_7L4PEmf8_?updatedAt=1755293393035"
          alt="imagem de fundo"
          className="w-full min-h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#213e60]">
          <h2 className="bg-white text-6xl font-bold mb-4">Remédios </h2>
          <p className="text-3xl font-bold bg-white mb-6">
            Aqui você encontra tudo o que precisa
          </p>
          <Link to="/categorias">
            <button className="text-lg text-white font-bold bg-[#c7a170] hover:bg-[#c7a188] px-4 py-2 rounded-2xl">
               Veja os nossos produtos!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
