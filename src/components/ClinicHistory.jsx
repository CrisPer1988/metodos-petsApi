import React from 'react'
import Table from "react-bootstrap/Table";

const ClinicHistory = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/clinic-history</h3>
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
            <td className="table">/:id</td>
            <td className="table">
            Crear una nueva historia clinica, siendo :id el id de la mascota (enviar description, date y vet_id 
en req.body)
            </td>
          </tr>
          <tr>
            <td className="table">GET</td>
            <td className="table">/</td>
            <td className="table">
              Buscar toda la historia clinica de la mascota
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
          Solo el usuario con role "vet" podra tener acceso a esta seccion.
        </li>
        <li>
        Todas las rutas deben estar protegidas por un método de autentificación.
        </li>
        <li> El endpoint para crear historia clinica, debe estar protegido con express-validator.</li>
        <li>
          El motodo GET, debe incluir la siguiente información:
          <ol>
            <li>Informacion de la mascota</li>
            <li>Informacion de los veterinarios</li>
            <li>Informacion de los tratamientos</li>
            <li>Informacion de los examanes</li>
          </ol>
        </li>
      </ul>
    </>
  )
}

export default ClinicHistory