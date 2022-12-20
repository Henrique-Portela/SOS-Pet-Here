import {  Routes, Route, Link } from 'react-router-dom';
import MeAdota from './pages/MeAdota/MeAdota';
import EncontreAnimalPerdido  from './pages/EncontreAnimalPerdido/EncontreAnimalPerdido';
import AnunciarAdocao from './pages/AnunciarAdocao/AnunciarAdocao';
import AnunciarAnimalPerdido from './pages/AnunciarAnimalPerdido/AnunciarAnimalPerdido';



import './App.css';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <> 
  
    <div>
    <Link to="/">Me Adota</Link>
    <Link to="/buscar">EncontreAnimalPerdido</Link>
    <Link to="/anunciar">AnunciarAdocao</Link>
    <Link to="/anunciar-perdido">AnunciarAnimalPerdido</Link>
  
  
  </div>
    <Routes>

    <Route path="/" element={ <MeAdota /> } />
    <Route path="/buscar" element={ <EncontreAnimalPerdido /> } />
    <Route path="/anunciar" element={ <AnunciarAdocao /> } />
    <Route path="/anunciar-perdido" element={ <AnunciarAnimalPerdido /> } />


    </Routes>



    </>
  )
  }
    export default App; 