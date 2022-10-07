import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import DataBase from "./DataBase";
import { Link } from "react-router-dom";
import './auth.css'
const API_URL = `${process.env.REACT_APP_SERVER_URL}`

function Products(props) {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get(`${API_URL}/productos`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProducts();
  }, [] );

  
  return (
		<div className="allProducts">     
			{/* <DataBase refreshProjects={getAllProducts}/> */}
		 <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>
					<div className="bg-white">
						<div>
							<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6  lg:grid-cols-4 xl:gap-x-8">
								{products.map((product) => 
									<div key={product._id} className="group relative">
										<Link to={`/productos/${product._id}`}>

										<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
											<img
												src={product.imageUrl}
												alt={product.imageAlt}
												className="h-full w-full object-cover object-center lg:h-full lg:w-full"
												/>
										</div>
												</Link>
										
										<div className="mt-4 flex justify-between">
											<div>
												<h3 className="text-sm text-gray-700">
                         <p>{product.productname}</p>
												</h3>
												<p className="mt-1 text-sm text-gray-500">{product.description}</p>
											</div>
											<p className="text-sm font-medium text-gray-900">${product.price}.00</p>
										</div>
										<div>
											<Link to={`/productos/${product._id}`}>
										<button className="button-product">Informacion</button>
											</Link>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
    </div>
  );
}

export default Products;
