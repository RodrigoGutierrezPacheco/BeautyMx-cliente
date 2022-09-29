const stores = [
  {
    name: 'Espacio Pink-San Diego',
    description: 'Horario: Lunes-Viernes de 10:30-18:30 y Sabados de 10:30-14:30',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t39.30808-6/245253789_1056736628198691_7176325707063279624_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cYwSYe6P93EAX9gGgnf&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT8f9PromB8vqgI0SbTMXqyOJJmHjTG71n3vGJhgnYg46Q&oe=63392C37',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href:"#",
  },
  {
    name: 'Plaza Cuernavaca',
    description: 'Horario: Todos los dias de 10:30-19:30',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.6435-9/125176200_3506563756047462_2554141924923154589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DRUfAh-JSmIAX_zHulY&_nc_oc=AQmytrUlPxr93VGLwvNtGjC0yGKM-jKwUkCHQqhKFrmRSQ0jv8CgmBAoPjOt1r-Gdew&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_sqNeEaR1wtgU4Ss_pn-6EIy6OOFdb7-1-S9BxapxLcw&oe=635A8F07',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Puertas Abiertas-Forum Cuernavaca',
    description: 'Horario: Todos los dias de 10:30-19:30',
    imageSrc: 'https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.6435-9/152261828_107821501351040_9020881106621781209_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HjldSi9wWbwAX9UdMof&tn=DTN141qqi3AZexYH&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT_BRIjeXIsH_91N9qh8FEZeWWY7zTMLi2VB04j_JmDcbg&oe=63591A2C',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function PointsOfSale() {
  return (
    <div className="bg-white-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Puntos de venta en Cuernavaca, Morelos.</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {stores.map((stores) => (
              <div key={stores.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={stores.imageSrc}
                    alt={stores.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
								
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={stores.href}>
                    <span className="absolute inset-0" />
                    {stores.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{stores.description}</p>
								<button>Informacion</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

