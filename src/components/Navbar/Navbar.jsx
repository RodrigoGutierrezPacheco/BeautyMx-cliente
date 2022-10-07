import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav>
			<a href="/"> 
			<img className="block h-8 w-auto lg:block beauty-logo" src="images/beauty-blanco.png" alt="Your Company"/> </a>


      <div className="nav__authLinks">
        {props.user? (      
          <>
            {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link> */}
						<Link to={"/productos"} className="authLink">
             Productos
            </Link>
						<Link to={"/puntos-de-venta"} className="authLink">
             Puntos de Venta
            </Link>
						<Link to={"/base-de-datos"} className="authLink">
             Base de Datos
            </Link>
            <button className="button-logout" onClick={props.handleLogout}>
              Cerrar Sesion
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
			<img src="../../public/images/beauty-ico.png" alt="" />
    </nav>
  );
};

export default Navbar;
