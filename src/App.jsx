import { useState, useEffect } from 'react'
import { Contendor } from "./components/Contenedor"
import { consultar } from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx'
function App() {
  // States
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  // Funciones
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
  if (loading) {
    return <p>Cargando....</p>
  }
  return (
    <div className="bg-red-500">
      <Contendor >
        {

          items.map((item) => {
            return <Tarjeta item={item} key={item?.id} />

          })
        }
      </Contendor>
    </div>
  )
}

export default App
