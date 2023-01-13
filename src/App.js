import { Routes, Route } from "react-router-dom";
import MeAdota from "./pages/MeAdota/MeAdota";
import AnunciarAdocao from "./pages/AnunciarAdocao/AnunciarAdocao";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InfoPet from "./pages/InfoPet/InfoPet";
import CadastroPessoal from "./pages/Cadastro/Cadastro";
import GerenciarAnimais2 from "./pages/GerenciarAnimais2/GerenciarAnimais2";
import EditPet from "./pages/EditPet/EditPet";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MeAdota />} />
        <Route path="/anunciar" element={<AnunciarAdocao />} />
        <Route path="/pet/:infopetId" element={<InfoPet />} />
        <Route path="/cadastro-pessoal" element={<CadastroPessoal/>} />
        <Route path="/gerenciar-animais2" element={<GerenciarAnimais2 />} />
        <Route path="/editarpet/:id/editar" element={<EditPet />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
