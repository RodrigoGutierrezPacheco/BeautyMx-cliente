import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import LogIn from "./pages/LogIn";
import Products from "./pages/Products";
import SalePoints from "./pages/SalePoints";
import ProductsDetails from "./pages/ProductsDetails";
import ShoppingCard from "./pages/ShoppingCart";
import Footer from "./components/Footer/Footer";
import DataBase from "./pages/DataBase";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }


  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
				<Route path="/" element={<HomePage/>}/>
				<Route path="/acceder" element={<LogIn authenticate={authenticate}/>}/>
				<Route path="/registrarse" element={<Signup authenticate={authenticate}/>}/>
				<Route path="/productos" element={<Products/>}/>
				<Route path="/productos/:id" element={<ProductsDetails/>} user={user}/>
				<Route path="/productos/:id/editar" element={<EditProduct/>} user={user}/>
				<Route path="/puntos-de-venta" element={<SalePoints/>}/>
				<Route path="/carrito-de-compras" element={<ShoppingCard/>}/>
				<Route path="/base-de-datos" element={<DataBase/>} authenticate={authenticate}/>
      </Routes>
    <Footer/>
    </div>
  );
}
