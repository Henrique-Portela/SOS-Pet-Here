import {  Routes, Route } from 'react-router-dom';
import MeAdota from './pages/MeAdota/MeAdota';
import EncontreAnimalPerdido  from './pages/EncontreAnimalPerdido/EncontreAnimalPerdido';
import AnunciarAdocao from './pages/AnunciarAdocao/AnunciarAdocao';
import AnunciarAnimalPerdido from './pages/AnunciarAnimalPerdido/AnunciarAnimalPerdido';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InfoPet from './pages/InfoPet/InfoPet';
import GerenciarAnimais from './pages/GerenciarAnimais/GerenciarAnimais';


function App() {
  return (
    <div className="App"> 
      <Navbar />
     
      
    <Routes>

    <Route path="/" element={ <MeAdota /> } />
    <Route path="/buscar" element={ <EncontreAnimalPerdido /> } />
    <Route path="/anunciar" element={ <AnunciarAdocao /> } />
    <Route path="/anunciar-perdido" element={ <AnunciarAnimalPerdido /> } />
    <Route path="/pet/:infopetId" element={<InfoPet /> } />
    <Route path="/gerenciar-animais" element={ <GerenciarAnimais /> } />
    


    </Routes>
    < Footer />
    </div>

    
  )
  }
    export default App; 