import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria"
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";


function ListarCategoria() {
  const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                navigate('/')
            }
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 
                          lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListarCategoria