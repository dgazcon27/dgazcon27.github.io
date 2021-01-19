import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import gsap from "gsap";
import "../../assets/styles/header.css";
import sofa from "../../assets/images/home.png";

const Header = ({ current }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [width, setWidth] = useState(0);
  const [heightScreen, setHeightScreen] = useState({ height: "300px" });

  useEffect(() => {
    if (width > 767) {
      window.onscroll = (e) => {
        if (window.pageYOffset > 400) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
    }
    const updateWidth = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
  }, [width]);

  // Set height screen for banner section
  useEffect(() => {
    setHeightScreen({ height: window.innerHeight });
  }, []);

  // resize height screen
  useEffect(() => {
    const updateScreenHeight = () => {
      setHeightScreen({ height: window.innerHeight });
    };

    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();
    let titleAnimation = tl.from(".words", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });

    let sofaAnimation = tl.from("#sofa-image", {
      duration: 1,
      opacity: 0,
      scale: 0.5,
    });

    document.addEventListener("DOMContentLoaded", function (event) {
      titleAnimation.play();
      sofaAnimation.play();
    });

    return () => {
      document.removeEventListener("DOMContentLoaded", function (event) {
        titleAnimation.kill();
        sofaAnimation.kill();
      });
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="md"
        fixed="top"
        className={`navbar-items ${isScroll ? "navbartop" : ""}`}
      >
        <Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#about-me"
                className={current === "about" ? "current" : ""}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={current === "projects" ? "current" : ""}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#contacts"
                className={current === "contacts" ? "current" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <div id="home"></div>
      <section id="banner-principal" style={heightScreen} className="banner">
        <div className="title-content">
          <h1 className="words">Hi</h1>
          <h1 className="words">I'm</h1>
          <h1 className="words"> Daniel</h1>
          <h1 className="words">Gazcón</h1>
          <h3 className="words">Junior Frontend Developer | JS</h3>
        </div>
        <div>
          <img
            id="sofa-image"
            className="d-none d-sm-block"
            src={sofa}
            alt="my sofa"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
