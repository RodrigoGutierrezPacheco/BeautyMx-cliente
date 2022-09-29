import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
			<a href="/"> 
			<img className="block h-8 w-auto lg:block beauty-logo" src="https://scontent.fcvj2-1.fna.fbcdn.net/v/t39.30808-6/300964463_575728204057753_6481416371373728302_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dKZ_qAEZjHgAX-W-oIT&_nc_ht=scontent.fcvj2-1.fna&oh=00_AT9bv-vQsDbXf5yr5YxhdFTCQBam5kaJ2348Zw-mLWJTqA&oe=63379CB0" alt="Your Company"/> </a>


      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/acceder"} className="authLink">
              Iniciar Sesion
            </Link>
            <Link to={"/registrarse"} className="authLink">
              Registrarse
            </Link>
						<Link to={"/productos"} className="authLink">
             Productos
            </Link>
						<Link to={"/puntos-de-venta"} className="authLink">
             Puntos de Venta
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
