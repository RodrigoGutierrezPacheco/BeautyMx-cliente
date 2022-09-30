import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
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
    price: '$750',
    color: 'La mejor calidad en todas nuestras tintas chinas',
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
    color: 'La paleta mas portatil y bonita en todo el mundo',
  },
  // More products...
]

export default function Products() {
  return (
    <div className="bg-white one">
      <div className="products">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Maquillaje</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
						<div>
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
							<button className="button-product"><a href="/carrito-de-compras">Comprar</a></button>
						</div>
          ))}
        </div>
      </div>
    </div>
		
  )
}