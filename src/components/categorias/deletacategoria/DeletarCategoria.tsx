import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"


function DeletarCategoria() {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      if (error.toString().includes('403')) {
        navigate('/categorias')
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {

    try {
      await deletar(`/categorias/${id}`)
      alert('Tema apagado com sucesso')

    } catch (error: any) {
      if (error.toString().includes('403')) {
        navigate('/categorias')
      }else {
        alert('Erro ao deletar a categoria.')
      }
    }
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className='container flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center my-4 font-bold'>Deletar tema</h1>
        <p className='text-center font-semibold mb-4'>
          Você tem certeza de que deseja apagar o tema a seguir?</p>
        <div className='w-[400px] flex flex-col gap-4 py-4 px-4 shadow-sm border border-gray-200'>
          <header 
            className='py-2 px-6 font-bold text-2xl'>
              Tema
          </header>
            <p className='p-8 text-3xl h-full'>{categoria.descricao}</p>
            <div className="flex gap-4 p-4 text-white">
              <button 
                className='bg-red-400 hover:bg-red-700 py-2 px-4 rounded-xl w-full'
                onClick={retornar}>
                  Não
              </button>
              <button 
                className='bg-slate-600 hover:bg-slate-400 py-2 px-4 rounded-xl w-full'
                onClick={deletarCategoria}>
                  Sim
              </button>
            </div>
        </div>
    </div>
  )
}

export default DeletarCategoria