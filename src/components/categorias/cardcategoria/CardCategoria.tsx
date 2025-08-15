import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriasProps {
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriasProps) {
  return (
    <div className=" flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 justify-between">
      <header className="py-2 px-6 bg-white font-semibold text-slate-900 text-2xl">
        {categoria.nome}
      </header>
      <p className="p-8 text-lg h-full text-gray-500">
        {categoria.descricao}
      </p>
      <div className="flex gap-4 p-4">
        <Link to={`/editarcategoria/${categoria.id}`} 
          className="text-slate-100 flex items-center justify-center w-full">
          <button className="bg-slate-600 hover:bg-slate-400 py-2 px-4 rounded-xl w-full">Editar</button>
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 w-full 
                    flex items-center justify-center">
          <button className="bg-red-400 hover:bg-red-700 py-2 px-4 rounded-xl w-full">
            Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria