import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PetCard from '../../components/PetCard/PetCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
  console.log(petPets)

  return (
    <Container>
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
                tipo={petAtual.petType}
                contato={petAtual.contact}
                local={petAtual.location}
                data={petAtual.date}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default MeAdota
