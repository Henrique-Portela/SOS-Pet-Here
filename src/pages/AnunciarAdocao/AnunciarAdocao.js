import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const AnunciarAdocao = () => {
  return (
    <div className='AnunciarAdocao'>
        <div className='row'>
            <div className='col'>
              <h1>Anuncie aqui</h1>
              <form>
              <div className="form row">
                <label for="tipodeanimal" className="col-sm-1 col-form-label">Tipo</label>
                <div className="col-sm-3">
                    <select className="form-control" >
                    <option>-</option>
                      <option>Cachorro</option>
                      <option>Gato</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>
                <div className="form row">
                  <label for="nomedoanimal" className="col-sm-1 col-form-label" >Nome</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Nome do Pet"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="idadedoanimal" className="col-sm-1 col-form-label" >Idade</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Idade do Pet"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="sexodoanimal" className="col-sm-1 col-form-label" >Sexo</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Sexo do Pet"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="raçadoanimal" className="col-sm-1 col-form-label" >Raça</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Raça do Pet"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="contatotutor" className="col-sm-1 col-form-label" >Contato</label>
                  <div className="col-sm-3"> 
                  <input type="number" className="form-control"  placeholder="Telefone do tutor"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="localdoanimal" className="col-sm-1 col-form-label" >Localização</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Localização do Pet"></input>
                  </div>
                </div>
                <div className="form row">
                  <label for="datadoanuncio" className="col-sm-1 col-form-label" >Data</label>
                  <div className="col-sm-3"> 
                  <input type="text" className="form-control"  placeholder="Data do anúncio"></input>
                  </div>
                </div>
                
                  <button type="submit" className="btn btn-primary col-sm-1">Anunciar</button>
                 
              </form>
            </div>
        </div>
    </div>
  );
}


export default AnunciarAdocao