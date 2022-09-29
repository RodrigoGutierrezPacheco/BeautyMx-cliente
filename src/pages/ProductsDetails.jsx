import React from 'react'
import Products from './Products'
import './auth.css'

const products = [
  {
    id: 1,
    name: 'Rose Quartz 💎✨',
    href: `/id/detalle`,
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/304781430_577344233896150_8022839248865241996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=jIAQ61ueUCUAX_8ZSR5&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_FmJMP2pt4zOMbms_XdKipWvP0vrKs6F4YAV6DEgSyDQ&oe=6339EC34',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$1,750',
    color: 'La mejor calidad en paletas de sombras ',
  },
	{
    id: 2,
    name: 'Tintas Peripera 💗',
    href: '/detalleProducto',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/298622218_2933792880246582_1732273584728815747_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XbPdYEfe8ycAX-z3je4&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT9zQez3QMe5Xh8_pqf1lqQh2jBkx4dWsupJdwOFdHxxJg&oe=6338D7D7',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$20peso',
    color: 'Varios',
  },
	{
    id: 3,
    name: '🍭✨JAWBREAKER PALETTE ✨🍭',
    href: '/detalleProducto',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/293394287_2915196175439586_2320000288855188801_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=w6R2q3oK1tMAX8MW1fi&tn=DTN141qqi3AZexYH&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT8n9sQCQD9hLiuwTkASCTkcFXcJKhzeBqbs78baQ_PoGg&oe=6339596A',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$1750',
    color: 'Paleta original Jeffree Star Cosmetics 🌈',
  },
	{
    id: 4,
    name: 'Fouroscope Palettes 💗',
    href: '/detalleProducto',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/272892751_2803563006602904_3918305066062819008_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=oB9j0cFf4uQAX97ZV73&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT9Ym8UpGpKJEao66VvK5uyn1bIrnZ-imtc2ce4nXEkIRQ&oe=6338C614',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$950',
    color: 'La mejor de las mejores',
  },
  // More products...
]
const ProductsDetails = (props) => {
	return (
		<div className='product-detail'>
			<div className='info'>
			<h1 className='title'>{products[0].name}</h1>
			<img className='img-details' src={products[0].imageSrc} alt={products[0].name} />
			<h2>{products[0].price}</h2>
			<h2 className='p-info'>{products[0].color}</h2>
			</div>
			<div className='info-container'>
		<h1 className='title'>Info</h1>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente velit suscipit illum iure? Odit ullam ducimus officiis. Voluptate quis, temporibus necessitatibus et nostrum a blanditiis sunt vitae tempore odio voluptatibus.</p>
		<button className='button-info'>Comprar</button>
			</div>
		</div>

	)
}

export default ProductsDetails