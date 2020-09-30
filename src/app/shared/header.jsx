import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../assets/styles/header.css'

const Header = () => {
	const [isScroll, setIsScroll] = useState(false)
	const [width, setWidth] = useState(0)

	useEffect(() => {
		if (width > 767) {
			window.onscroll = (e) => {
				if (window.pageYOffset > 400) {
					setIsScroll(true)
				} else {
					setIsScroll(false)
				}
			}
		}
		const updateWidth = () => {
			const width = document.body.clientWidth
			setWidth(width)
		}

		updateWidth()

		window.addEventListener('resize', updateWidth)


	}, [width])

	return (
		<div>
			<Navbar expand="md" fixed="top" className={`navbar-items ${isScroll ? "navbartop": ""}`} >
			  <Navbar.Brand href="#home"><img width="48px" height='auto' src={require("../../assets/images/js.png")}/></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
			    <Nav >
		      		<Nav.Link href="#home">Home</Nav.Link>
		      		<Nav.Link href="#link">Link</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
			<section className="banner">
				<h1>JathorStudio</h1>
				<h3>Diseño Digital, Gestion de RRSS, Desarrollo Web</h3>
			</section>

		</div>
	);
}

export default Header;