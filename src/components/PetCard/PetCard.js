import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetCard.css'




const PetCard = ({name, idade, sexo, raca, img, tipo, contato, local, data,}) => {
  return (
    <Card style={{ width: '15rem'}}>
    <Card.Img style={{ height:'19np8.81px'}}  variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      Muito dócil e agitado, sociável com outros cães e com pessoas. Gosta muito de brincar.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className="list-group-item card">{raca}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{idade}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{sexo}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{data}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{tipo}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{contato}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">{local}</ListGroup.Item>
      <div class="card-body">
    <a href="#" className="card-link">Conheça minha historia</a>
    
  </div>

      
    </ListGroup>
  </Card>
  )
}

export default PetCard 


