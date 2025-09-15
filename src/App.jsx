import { useState, useEffect } from 'react'
import { Contendor } from "./components/Contenedor"
import { consultar } from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx'
function App() {
  // States
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  // Funciones
  // BUSCAR POR NOMBRE
   const manejarBusqueda = (evento) => {
    setQuery(evento.target.value)
  }
  // Effects
  useEffect(() => {
    async function cargar() {
      setLoading(true)
      const i = await consultar()
      setItems(i)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    cargar()
  }, [])

   const filtrarItems = items.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  if (loading) {
    return <p>Cargando....</p>
  }
  return (
    <div className="bg-gradient-to-l 
    from-cyan-100 
    to-emerald-500 
    min-h-screen 
    flex 
    flex-col 
    justify-center 
    items-center ">
    <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={manejarBusqueda}
        className="
          w-full max-w-md p-2 
          rounded-md border-2 border-gray-300 "
      />  
      <Contendor >
        {

          filtrarItems.map((item) => {
            return <Tarjeta item={item} key={item?.id} />

          })
        }
      </Contendor>
    </div>
  )
}

export default App
