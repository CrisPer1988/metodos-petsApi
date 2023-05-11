import React from "react";

import Table from "react-bootstrap/Table";

const User = () => {
  return (
    <>
      <div className="content__endpoint">
        <h3>/api/v1/users</h3>
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
              Crear usuario (enviar name,surname, email, y password por
              req.body) (opcional el role)
            </td>
          </tr>
          <tr>
            <td className="table">POST</td>
            <td className="table">/login</td>
            <td className="table">
              Iniciar sesión (enviar email y password por req.body)
            </td>
          </tr>
          <tr>
            <td className="table">PATCH</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar perfil de usuario (solo name, surname y email)
            </td>
          </tr>

          <tr>
            <td className="table">DELETE</td>
            <td className="table">/:id</td>
            <td className="table">
              Actualizar perfil de usuario (status: disabled)
            </td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/pets</td>
            <td className="table">Obtener todas las mascotas del usuario</td>
          </tr>

          <tr>
            <td className="table">GET</td>
            <td className="table">/pets/:id</td>
            <td className="table">
              Obtener detalles de una sola mascota dado un ID{" "}
            </td>
          </tr>
        </tbody>
      </Table>
      <ul>
        <li>
          Todas las rutas, excepto para crear usuario e iniciar sesión, se deben
          proteger por un medio de autentificación, es decir, por JWT.
        </li>
        <li>
          Se debe usar express-validator para el endpoint de crear usuarios.
        </li>
        <li>Se debe encriptar la contraseña usando bcryptjs</li>
        <li>
          El endpoint /pets y /pets/:id, debe buscar las mascotas del usuario en
          sesión (del token que se envió), extraer el id del token y usarlo para
          buscar dichas mascotas
        </li>
        <li>
          Los métodos PATCH y DELETE deben estar protegidos para que únicamente
          el dueño de la cuenta a modificar pueda realizar dichas acciones.
        </li>
        <li>
          Para los endpoints /pets, se debe incluir la siguiente información:
          <ol>
            <li>Las citas programadas</li>
            <li>La historia clinica de la mascota</li>
          </ol>
        </li>
      </ul>
    </>
  );
};

export default User;
