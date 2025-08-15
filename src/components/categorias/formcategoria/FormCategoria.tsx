import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";


function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>();

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
      })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categoria, setCategoria)
          alert('Categoria foi atualizada com sucesso!')
        } catch (error: any) {
          if (error.toString().includes('403')) {
              navigate('/categorias')
            } else {
              alert('Erro ao atualizar a categoria.')
            }

          }
      } else {
        try {
          await cadastrar(`/categorias`, categoria, setCategoria)
          alert('Categoria foi cadastrada com sucesso!')
        } catch (error: any) {
          if (error.toString().includes('403')) {
            navigate('/categorias')
          } else {
            alert('Erro ao cadastrar a categoria.')
          }

        }
      }
      retornar()
    }

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center my-4 font-bold">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-[400px] flex flex-col gap-4 py-8 px-4 shadow-sm border border-gray-200" onSubmit={gerarNovaCategoria} >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-gray-700">Nome da categoria</label>
            <input
              type="text"
              placeholder="Qual é o nome da categoria"
              name='nome'
              className="border-2 border-gray-400 rounded p-2"
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-gray-700">Descrição da categoria</label>
            <input
              type="text"
              placeholder="Descreva a descrição da categoria"
              name='descricao'
              className="border-2 border-gray-400 rounded p-2"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
        </div>
        <button
          className="rounded text-slate-100 bg-[#c7a170] 
                 hover:bg-[#c7a190] w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
        </button>
      </form>
    </div>
  )
}

export default FormCategoria