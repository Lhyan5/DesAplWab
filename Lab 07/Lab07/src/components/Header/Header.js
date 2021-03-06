import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import imgLogo from '../../assets/img/logo-tecsup.png';

const Header = props => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark" id="header">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={imgLogo} alt="Tecsup Logo" />
					Tecsup App
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<NavLink to="/" exact className="nav-link">
							Inicio
						</NavLink>
						<NavLink to="/login" className="nav-link">
							Iniciar sesión
						</NavLink>
						<NavLink to="/logout" className="nav-link">
							Cerrar sesión
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
