import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetCard.css'
import {Link} from "react-router-dom"




const PetCard = ({name, idade, sexo, raca, img, tipo, contato, local, data, id}) => {
  return (
    <Card style={{ width: '15rem'}}>
    <Card.Img style={{ height:'19np8.81px'}}  variant="top" src={img} />
    <ListGroup className="list-group-flush">
      <ListGroup.Item className="list-group-item card">{raca}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{idade}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{sexo}</ListGroup.Item>

      <div class="card-body">
    <Link to={`/pet/${id}`} className="card-link">Conheça minha historia</Link>
    
  </div>

      
    </ListGroup>
  </Card>
  )
}

export default PetCard 


