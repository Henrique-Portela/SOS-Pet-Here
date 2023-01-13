import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetCard from '../../components/PetCard/PetCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../../Logo/dogandcat.jpeg'


const MeAdota = () => {
  const [petPets, setPetPets] = useState([])

  const url = 'https://ironrest.cyclic.app/sos_pet_here'

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setPetPets([...response.data])
      } catch (error) {
        console.log(error)
      }
    }
    fetchPet()
  }, [])
 

  return (
    <Container>
      <img className="Logo" src={Logo} alt="Logo" />
      <p>O cachorrinho  e o gatinho que você procura para alegrar sua família está aqui, só esperando pela chance de te fazer (mais) feliz!
Hoje somos ponte entre o cachorrinho que precisa de um lar e o humano que precisa amar.</p>
      <Row>
        {petPets.map((petAtual) => {
          return (
            <Col>
              <PetCard 
                name={petAtual.name}
                idade={petAtual.age}
                sexo={petAtual.gender}
                raca={petAtual.breed}
                img={petAtual.imageUrl}
                id={petAtual._id}
                
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
} 
export default MeAdota
