import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Logo from '../../Logo/dog.jpeg';
import swal from 'sweetalert'
      


const EditPet = () => {
  const [petType, setpetType] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [breed, setbreed] = useState("");
  const [contact, setcontact] = useState(0);
  const [location, setlocation] = useState("");
  const [date, setdate] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [descricao, setdescricao] = useState("");

  
  const navigate = useNavigate();

  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://ironrest.cyclic.app/sos_pet_here/${id}`)
        .then(response => {
            let { 
              petType,
              name,
              age,
              gender,
              breed,
              contact,
              location,
              date,
              imageUrl,
              descricao 
            } = response.data
            setpetType(petType)
            setname(name)
            setage(age)
            setgender(gender)
            setbreed(breed)
            setcontact(contact)
            setlocation(location)
            setdate(date)
            setimageUrl(imageUrl)
            setdescricao(descricao)

        })
}, [id])



  const handleSubmit = e => {
    e.preventDefault()

    const updatePet = {
      petType,
      name,
      age,
      gender,
      breed,
      contact,
      location,
      date,
      imageUrl,
      descricao
    }

    axios.put(`https://ironrest.cyclic.app/sos_pet_here/${id}`, updatePet)
      .then((response) => {
        swal({
          title: "O Pet foi Atualizado!",
          icon: "success",
          button: "OK",
        })
     })

      .then((response) => {
        navigate("/gerenciar-animais2")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="EditPet">
      <img className="Logo" src={Logo} alt="Logo" />
      <div className="row">
        <div className="col">
          <h1>Edite as informações do seu Pet</h1>
          <form onSubmit={handleSubmit}>
          <div className="form row">
              <label for="tipodoanimal" className="col-sm-1 col-form-label">
                Tipo
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tipo do Pet"
                  id="tipo"
                  value={petType}
                  onChange={(e) => setpetType(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="nomedoanimal" className="col-sm-1 col-form-label">
                Nome
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do Pet"
                  id="nome"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="idadedoanimal" className="col-sm-1 col-form-label">
                Idade
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Idade do Pet"
                  id="idade"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="sexodoanimal" className="col-sm-1 col-form-label">
                Sexo
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sexo do Pet"
                  id="sexodoanimal"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="raçadoanimal" className="col-sm-1 col-form-label">
                Raça
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Raça do Pet"
                  id="raça"
                  value={breed}
                  onChange={(e) => setbreed(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="contatotutor" className="col-sm-1 col-form-label">
                Contato
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telefone do tutor"
                  id="contatotutor"
                  value={contact}
                  onChange={(e) => setcontact(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="localdoanimal" className="col-sm-1 col-form-label">
                Localização
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Localização do Pet"
                  id="localizacao"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="datadoanuncio" className="col-sm-1 col-form-label">
                Data
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Data do anúncio"
                  id="dataanuncio"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>
            </div>
            <div className="form row">
              <label for="petimagem" className="col-sm-1 col-form-label">
                Pet Imagem
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Imagem do Pet"
                  id="petimagem"
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                />
              </div>
              <div className="form-group">
            
          
                
              </div>
            </div>

            <button type="submit" className="btn btn-primary col-sm-1">
              Editar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPet;



