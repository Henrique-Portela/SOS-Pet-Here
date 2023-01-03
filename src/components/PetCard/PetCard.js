import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PetCard.css'




const PetCard = ({name, idade, sexo, raca, img, tipo, contato, local, data,}) => {
  return (
    <Card style={{ width: '15rem'}}>
    <Card.Img style={{ height:'198.81px'}}  variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      Muito dócil e agitado, sociável com outros cães e com pessoas. Gosta muito de brincar.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className="list-group-item">{raca}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{idade}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{sexo}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{data}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{tipo}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{contato}</ListGroup.Item>
      <ListGroup.Item className="list-group-item">{local}</ListGroup.Item>
      
    </ListGroup>
  </Card>
  )
}

export default PetCard 


