import React, { useState, useMemo } from 'react'

import "./styles/UsersTable.css"

// Class constructor to create data
class User {
    constructor(nombre, apellidoMaterno, apellidoPaterno, perfil, status, estado, ciudad, correo) {
        this.nombre = nombre;
        this.apellidoMaterno = apellidoMaterno;
        this.apellidoPaterno = apellidoPaterno;
        this.perfil = perfil;
        this.status = status;
        this.estado = estado;
        this.ciudad = ciudad;
        this.correo = correo;
    }
}

const users = [
    new User("Juan", "Perez", "Perez", "Usuario", "Activo", "San Francisco", "California", "juan@gmail.com"),
    new User("Jorge", "Lopez", "Herrera", "Usuario", "Activo", "Jalisco", "California", "jorge@gmail.com"),
    new User("Jose", "Hernandez", "Carrillo", "Usuario", "Activo", "San Francisco", "California", "jose@gmail.com"),
    new User("Juan", "Perez", "Perez", "Usuario", "Activo", "San Francisco", "California", "juan@gmail.com"),
]

console.log(users)

function useSearchUsers(users) {
    const [query, setQuery] = useState("");
    const [filterUsers, setFilterUsers] = useState(users);

    useMemo(() => {
        const result = users.filter((user) => {
            return `${user.nombre} ${user.apellidoMaterno} ${user.apellidoPaterno}`.toLowerCase().includes(query.toLowerCase());
        });

        setFilterUsers(result);
    }, [users, query]);

    return { query, setQuery, filterUsers };
}

export default function UsersTable() {
    const { query, setQuery, filterUsers } = useSearchUsers(users);

    return (
        <>
            <div className="table__search">
                <label htmlFor="search">Filtrar usuarios:</label>
                <input
                    type="text"
                    placeholder="Buscar"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    id="search"
                />
            </div>
            <div className="table__container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido Materno</th>
                            <th>Apellido Paterno</th>
                            <th>Perfil</th>
                            <th>Status</th>
                            <th>Estado</th>
                            <th>Ciudad</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterUsers.map((row, index) => (
                            <tr key={index}>
                                <td>{row.nombre}</td>
                                <td>{row.apellidoMaterno}</td>
                                <td>{row.apellidoPaterno}</td>
                                <td>{row.perfil}</td>
                                <td>{row.status}</td>
                                <td>{row.estado}</td>
                                <td>{row.ciudad}</td>
                                <td>{row.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filterUsers.length === 0 && <p style={{ textAlign: "center", padding: "10px" }}>No se encontraron usuarios.</p>}
            </div>
        </>
    )
}