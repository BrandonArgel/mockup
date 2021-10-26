import React from "react";

import Logo from "../assets/img/logo.png"
import Settings from "../assets/svg/settings.svg";
import Search from "../assets/svg/search.svg";
import Tinkerbell from "../assets/svg/tinkerbell.svg";

import "./styles/Header.css";

export default function Header() {
	return (
		<header className="header">
			<a href="/">
				<img src={Logo} alt="Logo" />
			</a>
			<nav className="header__nav">
				<ul>
					<li>
						<img src={Tinkerbell} alt="Notificaciones" />
					</li>
					<li>
						<img src={Settings} alt="Ajustes" />
					</li>
					<li>
						<img src={Search} alt="Búsqueda" />
					</li>
					<li>
						<img
							className="header__nav--avatar"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"
							alt="avatar"
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
}
