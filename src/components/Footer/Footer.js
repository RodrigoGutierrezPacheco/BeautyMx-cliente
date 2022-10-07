import React from 'react'
import'./Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='soccialmedia'>
			<a href="https://www.facebook.com/beautyymx" className='logo'><img src="images/fb-logo.png" alt="" /></a>
			<a href="https://www.instagram.com/beautyymx/" className='logo-insta'><img src="images/instagram-logo.png" alt="" /></a>
			<h1 className='beautymx-footer'>Beauty Mx®</h1>
			</div>
			<div className='github'>
			<h1 className='deployed'>Developed by </h1>
			<a href="https://github.com/RodrigoGutierrezPacheco" className='logo-github'><img src="images/github-logo.png" alt="" /></a>
			</div>
			
		</div>
	)
}

export default Footer