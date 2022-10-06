import React from 'react'
import { useState } from "react";
import { useNavigate,useEffect } from "react-router-dom";
import axios from "axios";
import service from "../api/service";
import ProductCreated from '../components/ProductCreated/ProductCreated';
import { Stack } from '@mui/system';
import { Navigate,Link } from "react-router-dom";
import { Alert,AlertTitle,Button } from '@mui/material';
import SuccesAlert from '../components/SuccesAlert/SuccesAlert';
const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const DataBase = (props) => {
	// console.log("PROPS-----",props)
	const[showAlert,setShowAlert] = useState(false);
	const [productname, setProductname] = useState("");
	const [description, setDescription] = useState("");
	const [brand, setBrand] = useState("");
	const [categoryone, setCategoryone] = useState("");
	const [categorytwo, setCategorytwo] = useState("");
	const [subcategory, setSubcategory] = useState("");
	const [price, setPrice] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
     console.log("Enviando datos-----")
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.imageUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) =>{
		console.log("SUBIENDO DATOS")
    e.preventDefault();

		const requestBody = {productname,description,brand,categoryone,categorytwo,subcategory,price,imageUrl};

		axios
		.post(`${process.env.REACT_APP_SERVER_URL}/productos`,requestBody)
		.then((response)=>{
			setProductname("");
			setDescription("");
			setBrand("");
			setCategoryone("");
			setCategorytwo("");
			setPrice("");
			setImageUrl("");
			setShowAlert(true);
		})
		.catch((error)=>console.log(error))
	}

	return (
		<div>
    <h1 className='title data'>Base de Datos</h1>
		{showAlert && <SuccesAlert/>}
		<form onSubmit={handleSubmit}>
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
                        <option value="Anastasia">Anastasia</option>
                        <option value="Beauty Creations">Beauty Creations</option>
												<option value="Colourpop">Colourpop</option>
												<option value="Elf">Elf</option>
												<option value="Foreo">Foreo</option>
												<option value="Huda Beauty">Huda Beauty</option>
												<option value="Morphe">Morphe</option>
												<option value="The Ordinary">The Ordinary</option>
												<option value="Too Faced">Too Faced</option>
                    </select>
		
										<label>Categoria 1</label>
                    <select type="text"
          name="categoryone"
          value={categoryone}
          onChange={(e) => setCategoryone(e.target.value)} required>
                        <option value="">-</option>
                        <option value="Maquillaje">Maquillaje</option>
                        <option value="Cuidado para la piel">Cuidado de la piel</option>
												<option value="Otros">Otros</option>
                    </select>
			
										<label>Categoria 2</label>
                    <select type="text"
          name="categorytwo"
          value={categorytwo}
          onChange={(e) => setCategorytwo(e.target.value)} required>
                        <option value="">-</option>
                        <option value="Cara">Cara</option>
                        <option value="Ojos">Ojos</option>
												<option value="Labios">Labios</option>
												<option value="Mejillas">Mejillas</option>
                    </select>
										<label>Subcategoria</label>
                    <select type="text"
          name="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)} required>
                        <option value="">-</option>
                        <option value="Paletas">Paletas</option>
                        <option value="Rimel">Rimel</option>
												<option value="Labial">Labial</option>
                    </select>
										<label htmlFor="input-password">Precio</label>
                    <input placeholder="$100.00" name="price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}/>
										<label htmlFor="">Imagen Producto</label>
										<input
													onChange={(e) => handleFileUpload(e)}
										      type="file"  
                          name="imageUrl"
                          // value={imageUrl}
													class="form-control" 
													id="inputGroupFile02"
												  required/>
										<button type="submit" className='btn-database'>Subir</button>
                    <img src={imageUrl} alt="" className='img-database'/>

					</div>
	 </div>
									</form>
		</div>
		
	)
}

export default DataBase