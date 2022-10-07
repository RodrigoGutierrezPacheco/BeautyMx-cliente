import { Button, Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

const stores = [
  {
    name: 'Espacio Pink-San Diego',
    description: 'Horario: Lunes-Viernes de 10:30-18:30 y Sabados de 10:30-14:30',
    imageSrc: 'images/espaciopink-logo.png',
    imageAlt: 'Espacio Pink - San Diego',
    href:"#",
  },
  {
    name: 'Plaza Cuernavaca',
    description: 'Horario: Todos los dias de 10:30-19:30 .................................',
    imageSrc: 'images/plazacuernavaca-logo.jpg',
    imageAlt: 'Plaza Cuernavaca',
    href: '#',
  },
  {
    name: 'Puertas Abiertas-Forum Cuernavaca',
    description: 'Horario: Todos los dias de 10:30-19:30  .................................',
    imageSrc: 'images/puertas.jpg',
    imageAlt: '¨Puertas Abiertas - Forum ',
    href: '#',
  },
]

export default function PointsOfSale() {
	const [openE,setOpenE] = useState(false)
	const [openP,setOpenP] = useState(false)
	const [openF,setOpenF] = useState(false)
  return (
		<div className="sale-points">
    <div className="bg-white-100">
      <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
        <div>
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
                    <span className="absolute inset-0" />
                    {stores.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">{stores.description}</p>
			
								{/* <button className="button-product">Informacion</button> */}
              </div>
            ))}
						<Button onClick={()=> setOpenE(true)} className="btn-espaciopink">Informacion</Button>	
					      <Modal open={openE} onClose={()=>setOpenE(false)}>
                 <Box position="absolute" className="modal">
									<div className="modal-container">
										<h1 className="title">Espacio Pink-San Diego</h1>
										<img src="images/espaciopink-lugar.jpg" alt="" className="espaciopink" />
										<p><b>Horario:</b> Lunes-viernes de 10:30-18:30 y Sabados de 10:30-14:30</p>
										<p><b>Direccion:</b> Av. San Diego 300, zona 1, Vista Hermosa, 62290 Cuernavaca, Mor.</p>
									<Button onClick={()=> setOpenE(false)}>Volver</Button>
									</div>
								 </Box>
								</Modal>
								
								<Button onClick={()=> setOpenP(true)} className="btn-espaciopink">Informacion</Button>
								<Modal open={openP} onClose={()=>setOpenP(false)}>
                 <Box position="absolute" className="modal">
									<div className="modal-container">
										<h1 className="title">Plaza Cuernavaca</h1>
										<img src="images/carreta.jpeg" alt="" className="espaciopink" />
										<p><b>Horario:</b> Todos los dias de 10:30-19:30</p>
										<p><b>Direccion: </b> Av Vicente Guerrero #110, Lomas de la Selva, 62270 Cuernavaca, Mor.</p>
									<Button onClick={()=> setOpenP(false)}>Volver</Button>
									</div>
								 </Box>
								</Modal>

								<Button onClick={()=> setOpenF(true)} className="btn-espaciopink">Informacion</Button>
								<Modal open={openF} onClose={()=>setOpenF(false)}>
                 <Box position="absolute" className="modal">
									<div className="modal-container">
										<h1 className="title">Puertas Abiertas-Forum</h1>
										<img src="images/puertas.png" alt="" className="espaciopink" />
										<p><b>Horario:</b> Lunes-viernes de 10:30-18:30 y Sabados de 10:30-14:30</p>
										<p><b>Direccion:</b> C. Jacarandas 103, Ricardo Flores Magon, 62370 Cuernavaca, Mor</p>
									<Button onClick={()=> setOpenF(false)} className="goback">Volver</Button>
									</div>
								 </Box>
								</Modal>
          </div>
        </div>
      </div>
    </div>
		</div>
  )
}