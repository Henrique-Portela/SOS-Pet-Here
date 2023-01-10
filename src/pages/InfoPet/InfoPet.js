import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import PetCard from '../../components/PetCard/PetCard'

const InfoPet = () => {
const {infopetId} = useParams ()

const [pet, setPet] = useState ()

useEffect(()=>{
    axios.get(`https://ironrest.cyclic.app/sos_pet_here/${infopetId}`)
    .then(response => {
        setPet(response.data)
    })
    .catch(err => console.log(err))

},[infopetId]) 

return (
    <div className="row">
 {
    pet ? (
         <>
    <div className="col">
     <img width={400} src={ pet.imageUrl ? pet.imageUrl :'https://via.placeholder.com/400x500' } alt="pet" />
    </div>
       </>
    ) : (
     <p>loading</p>
     )
     }
            </div>
)
}

export default InfoPet