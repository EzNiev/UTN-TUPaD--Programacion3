import './style.css'
import { obtenerPersonajes } from './api/personajes'
import type { Personaje } from './types/personaje'

const URL_IMAGENES = 'https://cdn.thesimpsonsapi.com/500'

const contenedor = document.querySelector<HTMLDivElement>('#personajes')!

const crearTarjeta = (personaje: Personaje): HTMLDivElement => {
  const card = document.createElement('div')
  card.className = 'personaje-card'

  const img = document.createElement('img')
  img.src = URL_IMAGENES + personaje.portrait_path
  img.alt = personaje.name

  const nombre = document.createElement('h3')
  nombre.textContent = personaje.name

  const ocupacion = document.createElement('p')
  ocupacion.textContent = 'Ocupación: ' + personaje.occupation

  const estado = document.createElement('p')
  estado.textContent = 'Estado: ' + personaje.status

  const edad = document.createElement('p')
  edad.textContent = 'Edad: ' + personaje.age

  card.appendChild(img)
  card.appendChild(nombre)
  card.appendChild(ocupacion)
  card.appendChild(estado)
  card.appendChild(edad)

  return card
}

const mostrarPersonajes = (personajes: Personaje[]): void => {
  personajes.forEach((personaje) => {
    contenedor.appendChild(crearTarjeta(personaje))
  })
}

const iniciar = async (): Promise<void> => {
  const personajes = await obtenerPersonajes()
  mostrarPersonajes(personajes)
}

iniciar()