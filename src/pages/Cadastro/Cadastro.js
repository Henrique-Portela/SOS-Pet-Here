import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



function Cadastro() {
    return (
        <div className="row justify-content-center">                                     
      <Form className="formulario">
        <Form.Group className="mb-10 col-60" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Nunca compartilharemos seu e-mail com ninguém.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-10 col-15" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Link to="/gerenciar-animais2">
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>

        </Link>
       
      </Form>

      </div>

    );
  }
  
  export default Cadastro;