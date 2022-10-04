import React from 'react'
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const DataBase = (props) => {
	// console.log("PROPS-----",props)
	const [productname, setProductname] = useState("");
	const [description, setDescription] = useState("");
	const [brand, setBrand] = useState("");
	const [categoryone, setCategoryone] = useState("");
	const [categorytwo, setCategorytwo] = useState("");
	const [subcategory, setSubcategory] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

		const requestBody = {productname,description,brand,categoryone,categorytwo,subcategory,price,image};

		axios
		.post(`${API_URL}/productos`,requestBody)
		.then((response)=>{
			setProductname("");
			setDescription("");
			setBrand("");
			setCategoryone("");
			setCategorytwo("");
			setPrice("");
			setImage("");
			props.refreshProjects()
		})
		.catch((error)=>console.log(error))
	}

	return (
		<div>
    <h1 className='title data'>Base de Datos</h1>
		<form onSubmit={handleSubmit} enctype="multipart/form-data" method='post' >
	 <div className='container-database'>
		<div className='data-base'>
			<label htmlFor="input-product" required>Producto</label>
        <input placeholder="Nombre producto" type="text"
          name="productname"
          value={productname}
          onChange={(e) => setProductname(e.target.value)}  required/>
				<label htmlFor="input-password">Descripcion producto</label>
        <input placeholder="Nombre modelo" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

				<label >Marca</label>
                    <select type="text"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)} required>
                        <option value="">-</option>
                        <option value="anastasia">Anastasia</option>
                        <option value="beautycreations">Beauty Creations</option>
												<option value="colourpop">Colourpop</option>
												<option value="elf">ELF</option>
												<option value="foreo">Foreo</option>
												<option value="hudabeauty">Huda Beauty</option>
												<option value="morphe">Morphe</option>
												<option value="theordinary">The Ordinary</option>
												<option value="toofaced">Too Faced</option>
                    </select>
		
										<label>Categoria 1</label>
                    <select type="text"
          name="categoryone"
          value={categoryone}
          onChange={(e) => setCategoryone(e.target.value)} required>
                        <option value="">-</option>
                        <option value="maquillaje">Maquillaje</option>
                        <option value="cuidadoparalapiel">Cuidado de la piel</option>
												<option value="otros">Otros</option>
                    </select>
			
										<label>Categoria 2</label>
                    <select type="text"
          name="categorytwo"
          value={categorytwo}
          onChange={(e) => setCategorytwo(e.target.value)} required>
                        <option value="">-</option>
                        <option value="cara">Cara</option>
                        <option value="ojos">Ojos</option>
												<option value="labios">Labios</option>
												<option value="mejillas">Mejillas</option>
                    </select>
										<label>Subcategoria</label>
                    <select type="text"
          name="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)} required>
                        <option value="">-</option>
                        <option value="paletas">Paletas</option>
                        <option value="rimel">Rimel</option>
												<option value="labial">Labial</option>
                    </select>
										<label htmlFor="input-password">Precio</label>
        <input placeholder="$100.00" name="image"
          value={price}
          onChange={(e) => setPrice(e.target.value)}/>
										<label htmlFor="">Imagen Producto</label>
										<input
										      type="file"  
                           name="image"
                           value={image}
													 class="form-control" 
													 id="inputGroupFile02"
                           onChange={(e) => setImage(e.target.value)} 
													  required></input>
										<button type="submit" className='btn-database'>Subir</button>

					</div>
	 </div>
									</form>
		</div>
		
	)
}

export default DataBase