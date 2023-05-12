import React from 'react'
import Table from "react-bootstrap/Table";

const Appointment = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/appointment</h3>
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
            Crear una nueva cita, siendo :id el id de la mascota (enviar date, reason y vet_id 
en req.body)
            </td>
          </tr>
          <tr>
            <td className="table">GET</td>
            <td className="table">/</td>
            <td className="table">
              Buscar todas las citas
            </td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/:id</td>
            <td className="table">
              Buscar una cita por id
            </td>
          </tr>

          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar cita, siendo /:id el id de la cita  (solo date)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar estado de la cita (status: cancelled)
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>
        Todas las rutas deben estar protegidas por un método de autentificación.
        </li>
        <li>Los metodos PATCH Y DELETE deben estar protegidos para que solo el dueño de las citas 
          pueda actualizarlas o eliminarlas.
        </li>
        <li>
          Los metododos GET, debe incluir la siguiente información:
          <ol>
            <li>Informacion de la mascota</li>
            <li>Informacion del usuario dueño de la mascota</li>
            <li>Informacion de los veterinarios</li>
          </ol>
        </li>
      </ul>
    </>
  )
}

export default Appointment