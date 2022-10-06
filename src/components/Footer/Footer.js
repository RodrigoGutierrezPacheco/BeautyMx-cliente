import React from 'react'
import'./Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='soccialmedia'>
			<a href="https://www.facebook.com/beautyymx" className='logo'><img src="https://www.interlogicglobal.com/wp-content/uploads/2020/08/icono-fb.png" alt="" /></a>
			<a href="https://www.instagram.com/beautyymx/" className='logo-insta'><img src="http://www.conexiontecnologica.com.do/wp-content/uploads/2020/01/instagram.png" alt="" /></a>
			<h1 className='beautymx-footer'>Beauty Mx®</h1>
			</div>
			<div className='github'>
			<h1 className='deployed'>Developed by </h1>
			<a href="https://github.com/RodrigoGutierrezPacheco" className='logo-github'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
			</div>
			
		</div>
	)
}

export default Footer