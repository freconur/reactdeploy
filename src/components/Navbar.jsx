import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import '../styles/res/Navbar_res.css'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/waliky-logo.png'
import iconMenu from '../assets/icons/bars-solid.svg'

const Navbar = () => {

	const [toogle, setToogle] = useState(false)

	const handleClick = () => {
		setToogle(!toogle)
		// setAddClass(true)
	}

	return (
		<div className="Navbar">
			<div className="Navbar__container">
				<div className="Navbar__container-logo">
					<Link to="/">
						<img className="Navbar-logo" src={Logo} alt="logo" />
					</Link>
				</div>
				<div>
					{/* <ul className={ setAddClass => addClass ? 'Navbar__list active' : 'Navbar__list' }> */}
					<ul className="Navbar__list">
					{/* <ul className={`Navbar__list ${toogle ? 'Navbar__list-active' : ''}`}> */}
						<Link to='/' className="Navbar__list--section ">Blog</Link>
						<Link to='/' className="Navbar__list--section">Contactanos</Link>
						<Link to='/' className="Navbar__list--section ">Nosotros</Link>
						<Link to='/registre' className="Navbar__list--section ">sign in</Link>
						{/* <Link to='/' className="Navbar__list--section Navbar__list--res">inicia sesion</Link> */}
					</ul>
				</div>
			</div>
			<div className="Navbar__menuBurger" onClick={handleClick}> 
			{/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
			<div className='iconMenu__container'>
				<img className="iconMenu__image" src={iconMenu} alt="iconMenu" />
			</div>
			</div>
			 
			
				<ul className={`Menu ${toogle ? 'Menu-active' : ''}`}>
					<li className="Menu__li">
						<Link className="Menu__list" to='/' >Blog</Link>
					</li>
					<li className="Menu__li">
						<Link className="Menu__list" to='/'>Contactanos</Link>
					</li>
					<li className="Menu__li">
						<Link className="Menu__list" to='/' >Nosotros</Link>
					</li>
					<li className="Menu__li">
						<Link className="Menu__list" to='/' >categoria</Link>
					</li>
				</ul>
    	
		</div>
	)
}

export default Navbar