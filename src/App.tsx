
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarCategoria from "./components/categorias/listacategoria/ListarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletacategoria/DeletarCategoria"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter> 
    </>
  )
}

export default App