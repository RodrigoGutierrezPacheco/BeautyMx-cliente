export default function HomePage() {
  return (
    <div className="bg-white-50 body" >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center  lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bienvenidxs a</span>
          <span className="block text-red-600">Beauty Mx</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 beauty-info">
				<h3>Somos una empresa Mexicana dedicada a la venta de maquillaje y skincare de importación. Todos nuestros productos son 100% originales, ofreciendo una variedad de marcas en tendencia, de calidad y nuevas para su compra al por menor dentro de México.</h3>
        </div>
      </div>
			<div className="home-one">
			<img className="img-home-one" src="images/productos-carreta.jpeg" alt="" />
			<div className="homeone">
				<h2 className="title">Manejamos las mejores marcas!</h2>
				<p>Encuentra con nosotros los últimos lanzamientos del mundo del maquillaje. Contamos con la mejor calidad y variedad en el estado de Morelos.</p>
				<button className="btn-home-one"><a href="/productos">Conoce todos nuestros productos</a></button>
				<div className="logos-home">
					<img className="glossier" src="images/glossier.png" alt="" />
					<img className="colourpop" src="https://www.dafont.com/forum/attach/orig/5/9/591277.png" alt="" />
					<img className="morphe" src="https://bluebellgroup.com/wp-content/uploads/2021/01/morphe-logo.png" alt="" />
				</div>
			</div>
			</div>
			<div className="home-two">
			<img src="images/plazacuernavaca-logo.jpg" alt="" />
			<div>
				<h2 className="title">También nos puedes encontrar en diferentes puntos de venta, conócelos!</h2>
				<p>Encuéntranos en nuestros diferentes puntos de venta en Cuernavaca, Mor.!</p>
				<button className="btn-home-two"><a href="/puntos-de-venta">Puntos de Venta</a></button>
			</div>
			</div>
    </div>
		
  )
}