import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import DataBase from "./DataBase";
import { Link } from "react-router-dom";
import './auth.css'
const API_URL = "http://localhost:5005";

function ShoppingCart (props) {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
	// console.log("PROOOPS------>",props);

	//http://localhost:5005/api/projectt/id
	const getProduct = () => {        
    axios
      .get(`http://localhost:5005/productos/${id}`)
      .then((response) => {
				// console.log("RESPUESTA---->",response)
        const oneProject = response.data;
        setProduct(oneProject);
				// console.log(oneProject)
      })
      .catch((error) => console.log(error));
  };

			useEffect(() => {
				getProduct();
			}, []);
  
  return (
    <div className='products-details'>
			      {product && (
        <>
				<div>
          <h1 className='title'>{product.categoryone}</h1>
					<img src={product.image} alt="" className='image-details'/>
				</div>
				<div className='details'>
					<h1 className='title brand'>{product.brand}</h1>
					<h2>Este es un producto para {product.categorytwo}</h2>
          <p>{product.description}</p>
					<p>De la marca {product.brand}</p>
					<p>${product.price}.00</p>
					<Link to="/carrito-de-compras">
					<button className='btn-details-buy' onClick={()=>console.log(product)}>Comprar</button>
					</Link>
					<Link to="/productos">
				<button className='btn-details'>Regresar</button>
					</Link>
				</div>

        </>
      )}
		</div>
  );
}
 
export default ShoppingCart