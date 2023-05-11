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
            <td className="table">GET</td>
            <td className="table">/me</td>
            <td className="table">
              Buscar todas las mascotas del usuario
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
        <li>
          El motodo GET (/me), debe incluir la siguiente información:
          <ol>
            <li>Las citas programadas</li>
            <li>La historia clinica de la mascota</li>
          </ol>
        </li>
      </ul>
    </>
  )
}

export default Pet