import React from 'react'
import { getAllWines } from '../../lib/api'
import WineCard from './WineCard'

const WineIndex = () => {
  const [state, setState] = React.useState({ wines: [] })
  const fetchWinesFromApi = async () => {
    try {
      const response = await getAllWines()
      setState({ wines: response.data })
    } catch (err) {
      console.error('There is an error with fetching the wines', err)
    }
  }
  React.useEffect(() => {
    fetchWinesFromApi()
  }, [])
  console.log(state)
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.wines.map((wine) => (
            <WineCard
              key={wine._id}
              name={wine.name}
              origin={wine.origin}
              image={wine.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default WineIndex
