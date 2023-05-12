import React from 'react'
import Table from "react-bootstrap/Table";

const Vet = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/vets</h3>
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
            <td className="table">/signup</td>
            <td className="table">
            Crear un nuevo veterinario, (enviar name, speciality, email y password req.body)
            </td>
          </tr>
          <tr>
            <td className="table">POST</td>
            <td className="table">/login</td>
            <td className="table">
            Logear veterinario, (enviar email y password req.body)
            </td>
          </tr>
          <tr>
            <td className="table">GET</td>
            <td className="table">/</td>
            <td className="table">
              Buscar todos los veterinarios
            </td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/:id</td>
            <td className="table">
              Buscar un veterinario por id
            </td>
          </tr>

          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar veterinario, siendo /:id el id del veterinario (name, speciality, email)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar estado del veterinario (status: false)
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>
        Todas las rutas, excepto las rutas para crear y logear, deben estar protegidas por un método de autentificación.
        </li>
        <li>Utilizar express-validator para el endpoint de crear veterinario </li>
        <li>Los metodos PATCH Y DELETE deben estar protegidos para que solo el dueño 
          pueda actualizar o eliminar.
        </li>
        <li style={{color: "red"}}>***RECORDAR AGREGAR email Y password AL MODELO***</li>
      </ul>
    </>
  )
}

export default Vet