/* This example requires Tailwind CSS v2.0+ */


export default function HomePage() {
  return (
    <div className="bg-white-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bienvenidxs a</span>
          <span className="block text-red-600">Beauty Mx</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              ¿Quienes somos?
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black-600 hover:bg-black-50"
            >
              Conoce nuestros productos
            </a>
          </div>
        </div>
      </div>
			<div className="home-one">
			<img src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/272892751_2803563006602904_3918305066062819008_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=me4B0DBZdFYAX_cToOz&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_ck5ECM8FPPVhwVk0oHX162x1jZsaKCy8NvWTuP5Zegg&oe=633AC054" alt="" />
			<div>
				<h2>Tenemos los Mejores productos!</h2>
				<p>Productos de calidad, al mejor precio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic explicabo modi nulla nobis omnis beatae mollitia exercitationem quo. Magnam, qui! Error ipsam quis quidem voluptates numquam, vitae facilis labore sit!</p>
				<button><a href="/productos">Conoce todos nuestros productos</a></button>
			</div>
			</div>
			<div className="home-two">
			<img src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/272892751_2803563006602904_3918305066062819008_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=me4B0DBZdFYAX_cToOz&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_ck5ECM8FPPVhwVk0oHX162x1jZsaKCy8NvWTuP5Zegg&oe=633AC054" alt="" />
			<div>
				<h2>Tambien nos puedes encontrar en diferentes puntos de venta, conocelos!</h2>
				<p>Productos de calidad, al mejor precio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic explicabo modi nulla nobis omnis beatae mollitia exercitationem quo. Magnam, qui! Error ipsam quis quidem voluptates numquam, vitae facilis labore sit!</p>
				<button><a href="/productos">Conoce todos nuestros productos</a></button>
			</div>
			</div>
    </div>
		
  )
}