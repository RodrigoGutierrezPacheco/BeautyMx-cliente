import React from 'react'
import { useState,useEffect} from "react";
import { Navigate, useNavigate,useParams,Link } from "react-router-dom";
import axios from "axios";
import service from "../api/service";
import { Alert,AlertTitle,Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import SueccesAlert from '../components/SuccesAlert/SuccesAlert';


const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const EditProduct = (props) => {
	console.log(props)
	const navigate = useNavigate();
	const [product, setProject] = useState(null);
  const {id} = useParams();
	// console.log("USEPARAMS--->",useParams)
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

	const getProject = () => {     
    axios
      .get( `${process.env.REACT_APP_SERVER_URL}/productos/${id}`)
      .then((response) => {
				// console.log("RESPUESTA---->",response)
        const oneProject = response.data;
        setProject(oneProject);
				setProductname(oneProject.productname)
				setDescription(oneProject.description)
				setBrand(oneProject.brand)
				setCategoryone(oneProject.categoryone)
				setCategorytwo(oneProject.categorytwo)
				setSubcategory(oneProject.subcategory)
				setPrice(oneProject.price)
				// console.log(setProductname)
				// console.log("ONEPROJECT---->>>>",oneProject)
      })
      .catch((error) => console.log(error));
  };

	useEffect(() => {
		getProject();
	}, []);


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
		.put(`${process.env.REACT_APP_SERVER_URL}/productos/${id}`, requestBody)
		.then((response) => {
			console.log(response)
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
    <h1 className='title data'>Editar Producto</h1>
		{showAlert && <SueccesAlert/>}
		<form onSubmit={handleSubmit}>
	 <div className='container-database'>
		<div className='data-base'>
			<label htmlFor="input-product" required>Producto</label>
        <input type="text"
          name="productname"
          value={productname}
          onChange={(e) => setProductname(e.target.value)}  required/>
				<label htmlFor="input-password">Descripcion producto</label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

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
                        <option value=""></option>
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
                    <input name="price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}/>
										<label htmlFor="">Imagen Producto</label>
										<input
													onChange={(e) => handleFileUpload(e)}
										      type="file"  
                          name="imageUrl"
													class="form-control" 
													id="inputGroupFile02"
												  />
													<div className='btns-edit'>
										<button type="submit" className='btn-database' onClick={<SueccesAlert/>}>Actualizar</button>
										<Link to={`/productos/${id}`}>
										<button className='btn-database'>Regresar</button>
										</Link>
													</div>
                    <img src={imageUrl} alt="" width={20} />

					 </div>
	        </div>
				 </form>
		    </div>
		
	)
}

export default EditProduct;