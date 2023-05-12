import React from 'react'
import Table from "react-bootstrap/Table";

const Exam = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/exams</h3>
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
            Crear un nuevo examen, siendo /:id, el id de la historia clinica (enviar exam, description, date y result req.body)
            </td>
          </tr>
          <tr>
            <td className="table">GET</td>
            <td className="table">/</td>
            <td className="table">
              Buscar todos los examenes de la mascota.
            </td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/:id</td>
            <td className="table">
              Buscar un examen dado un id
            </td>
          </tr>

          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar examen, siendo /:id el id del exmane (solo result)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar estado del examen, siendo /:id el id del examen (status: cancelled)
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>Todas las rutas deben estar protegidas</li>
        <li>
        Solo los veterinarion podran tener acceso a esta ruta.
        </li>
        <li>El endpoint GET/:id, debe incluir la siguiente informacion</li>
        <ol>
            <li>Informacion de las imagenes de los examenes</li>
        </ol>
        <li>Utilizar express-validator para el endpoint de crear examen </li>
      </ul>
    </>
  )
}

export default Exam