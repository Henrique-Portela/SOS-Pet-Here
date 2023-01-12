import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PetCard from "../../components/PetCard/PetCard";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const InfoPet = () => {
  const { infopetId } = useParams();

  const [pet, setPet] = useState();

  useEffect(() => {
    axios
      .get(`https://ironrest.cyclic.app/sos_pet_here/${infopetId}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((err) => console.log(err));
  }, [infopetId]);
  console.log(pet);
  return (
    <div className="row">
      {pet ? (
        <>
          <div className="col">
            <img
              width={400}
              src={
                pet.imageUrl
                  ? pet.imageUrl
                  : "https://via.placeholder.com/400x500"
              }
              alt="pet"
            />
          </div>
          <Card style={{ width: "15rem" }}>
            <Card.Header>
              <b>Nome:</b> {pet.name}
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Idade: </b>
                {pet.age} meses
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Sexo: </b>
                {pet.gender}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Raça:</b>
                {pet.breed}
              </ListGroup.Item>
            </ListGroup>
          </Card>
       
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default InfoPet;
