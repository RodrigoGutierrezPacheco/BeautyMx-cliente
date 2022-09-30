/* This example requires Tailwind CSS v2.0+ */


export default function HomePage() {
  return (
    <div className="bg-white-50 body" >
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center  lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bienvenidxs a</span>
          <span className="block text-red-600">Beauty Mx</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 beauty-info">
				<h3>Somos una empresa Mexicana que distribuye productos de maquillaje y cuidado para la piel de marca 100% originales, ofreciendo una variedad de marcas en tendencua, basicas y nuevas para su compra al por menor dentro de Mexico.</h3>
        </div>
      </div>
			<div className="home-one">
			<img src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/272892751_2803563006602904_3918305066062819008_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=me4B0DBZdFYAX_cToOz&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_ck5ECM8FPPVhwVk0oHX162x1jZsaKCy8NvWTuP5Zegg&oe=633AC054" alt="" />
			<div>
				<h2 className="title">Manejamos las mejores marcas!</h2>
				<p>Productos de calidad, al mejor precio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic explicabo modi nulla nobis omnis beatae mollitia exercitationem quo. Magnam, qui! Error ipsam quis quidem voluptates numquam, vitae facilis labore sit!</p>
				<button className="btn-home-one"><a href="/productos">Conoce todos nuestros productos</a></button>
				<div className="logos-home">
					<img className="elf" src="https://swingsearch.com/wp-content/uploads/2019/06/structure-elf-1.png" alt="" />
					<img className="colourpop" src="https://www.dafont.com/forum/attach/orig/5/9/591277.png" alt="" />
					<img className="morphe" src="https://bluebellgroup.com/wp-content/uploads/2021/01/morphe-logo.png" alt="" />
				</div>
			</div>
			</div>
			<div className="home-two">
			<img src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.6435-9/125176200_3506563756047462_2554141924923154589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DRUfAh-JSmIAX_zHulY&_nc_oc=AQmytrUlPxr93VGLwvNtGjC0yGKM-jKwUkCHQqhKFrmRSQ0jv8CgmBAoPjOt1r-Gdew&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_sqNeEaR1wtgU4Ss_pn-6EIy6OOFdb7-1-S9BxapxLcw&oe=635A8F07" alt="" />
			<div>
				<h2 className="title">Tambien nos puedes encontrar en diferentes puntos de venta, conocelos!</h2>
				<p>Productos de calidad, al mejor precio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic explicabo modi nulla nobis omnis beatae mollitia exercitationem quo. Magnam, qui! Error ipsam quis quidem voluptates numquam, vitae facilis labore sit!</p>
				<button className="btn-home-two"><a href="/puntos-de-venta">Puntos de Venta</a></button>
			</div>
			</div>
    </div>
		
  )
}