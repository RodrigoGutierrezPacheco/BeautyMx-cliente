import React from 'react'
import Products from './Products'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import './auth.css'
import DataBase from './DataBase';

function ProductsDetails (props) {
	const navigate = useNavigate();
  const [product, setProject] = useState(null);
	// console.log(product)
  const {id} = useParams();
	// console.log("PROOOPS------>",props);


	const getProject = () => {        
    axios
      .get( `${process.env.REACT_APP_SERVER_URL}/productos/${id}`)
      .then((response) => {
				// console.log("RESPUESTA---->",response)
        const oneProject = response.data;
        setProject(oneProject);
				// console.log(oneProject)
      })
      .catch((error) => console.log(error));
  };

			useEffect(() => {
				getProject();
			}, []);

			function deleteProduct(){
				axios.delete( `${process.env.REACT_APP_SERVER_URL}/productos/${id}`)
				.then(()=>{
           navigate("/productos");
				})
				.catch(error=>console.log(error))
				// console.log(id)
			}
        
  return (
    <div className='products-details'>
			      {product && (
        <>
				<div>
          <h1 className='title'>{product.categoryone}</h1>
					<h1>{product.productname}</h1>
					<img src={product.imageUrl} alt="" className='image-details'/>
				</div>
			<div className='details'>
					<h1 className='title brand'>{product.brand}</h1>
					<h2>Este es un producto para {product.categorytwo}</h2>
          <p>{product.description}</p>
					<p>De la marca {product.brand}</p>
					<p>${product.price}.00</p>
				<div className='btns'>
					<Link to="/carrito-de-compras">
					<button className='btn-details-buy' onClick={()=>console.log(product)}>Comprar</button>
					</Link>
					<Link to="/productos">
				<button className='btn-details'>Regresar</button>
					</Link>
					<Link to = {`/productos/${id}/editar`}  >
					<button className='btn-details'>Editar</button>
					</Link>
					<button className='btn-details' onClick={deleteProduct}>Eliminar</button>
				</div>
			</div>
        </>
      )}
		</div>
  );
}
 
export default ProductsDetails