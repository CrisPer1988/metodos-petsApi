import React from 'react'
import Table from "react-bootstrap/Table";

const Treatment = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/treatments</h3>
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
            Crear un nuevo tratamiento, siendo /:id, el id de la historia clinica (enviar description, init_date y end_date req.body)
            </td>
          </tr>
          <tr>
            <td className="table">GET</td>
            <td className="table">/</td>
            <td className="table">
              Buscar todos los tratamiento de la mascota.
            </td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/:id</td>
            <td className="table">
              Buscar un tratmiento por id
            </td>
          </tr>

          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar tratamiento, siendo /:id el id del tratamiento (description, init_date y end_date)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar estado del tratamiento, siendo /:id el id del tratamiento (status: false)
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
      <li>Todas las rutas deben estar protegidas</li>

        <li>
        Solo los veterinarion podran tener acceso a esta ruta.
        </li>

        <li>Utilizar express-validator para el endpoint de crear tratamiento </li>
      </ul>
    </>
  )
}

export default Treatment