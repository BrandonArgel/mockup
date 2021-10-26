import React, { useState } from 'react'

import UsersTable from "./UsersTable.jsx";

import "./styles/TabSection.css"

export default function TabSection() {

    const [tab, setTab] = useState(1);

    return (
        <section className="tabs">
            <ul className="tabs__container">
                <li className="tabs__item">
                    <button className={`tabs__button ${tab === 0 ? "activo" : ""}`} onClick={() => { setTab(0) }}>Tablero</button>
                </li>
                <li className="tabs__item">
                    <button className={`tabs__button ${tab === 1 ? "activo" : ""}`} onClick={() => { setTab(1) }}>Usuarios</button>
                </li>
                <li className="tabs__item">
                    <button className={`tabs__button ${tab === 2 ? "activo" : ""}`} onClick={() => { setTab(2) }}>Productos</button>
                </li>
            </ul>
            <div className="tabs__content">
                {tab === 0 && <div className="tabs__content-item">
                    <h3>Dashboard</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum, assumenda quos dolore unde enim! Odio qui voluptate cum suscipit dolorum ad unde, quod nulla autem explicabo aspernatur! Odio, minima!</p>
                </div>}
                {tab === 1 && <div className="tabs__content-item">
                    <UsersTable />
                </div>}
                {tab === 2 && <div className="tabs__content-item">
                    <h3>Productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum, assumenda quos dolore unde enim! Odio qui voluptate cum suscipit dolorum ad unde, quod nulla autem explicabo aspernatur! Odio, minima!</p>
                </div>}
            </div>
        </section>
    )
}