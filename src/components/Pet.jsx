import React from 'react'
import Table from "react-bootstrap/Table";

const Pet = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/pets</h3>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="table">HTTP VERB</th>
            <th className="table">ROUTE</th>
            <th className="table">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table">POST</td>
            <td className="table">/</td>
            <td className="table">
              Crear mascota (enviar name,birthdate, genre, specie, race, weigth, heigth, petImgUrl por
              req.body)
            </td>
          </tr>
          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar perfil de la mascota (solo name, race, weigth, heigth)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar perfil de la mascota (status: false)
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>
        Todas las rutas deben estar protegidas por un método de autentificación.
        </li>
        <li>
          Se debe usar express-validator para el endpoint de crear mascotas.
        </li>
        <li>Para los metodos PATCH Y DELETE autorizar solo al dueño de la mascota a realizarlos</li>
        
      </ul>
    </>
  )
}

export default Pet