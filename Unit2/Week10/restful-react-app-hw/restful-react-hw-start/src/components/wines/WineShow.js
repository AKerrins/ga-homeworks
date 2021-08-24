import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleWine } from '../../lib/api'

const WineShow = () => {
  const { id } = useParams()
  const [state, setState] = React.useState({ wine: null })

  const getSingleWineFromApi = async () => {
    try {
      const res = await getSingleWine(id)
      setState({ wine: res.data })
    } catch (err) {
      console.error(
        `An error occurred while trying to fetch a single wine ${id}`,
        err,
      )
    }
  }

  React.useEffect(() => {
    getSingleWineFromApi()
  }, [])

  console.log('State is', state)

  if (state.wine === null) {
    return <p> Loading ...</p>
  }
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{state.wine.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is -half">
            <h4 className="title is-4">
              <span role="img" aria-lable="wine glass">
                🍷
              </span>
              Tasting Notes
            </h4>
            <hr />
            <p>{state.wine.user.origin}</p>
            <h4 className="title is-4">
              <span role="img" aria-lable="wave">
                👋
              </span>
              Added by:
            </h4>
            <p>{state.wine.user.username}</p>
            <nr />

            <div className="column is-half">
              <figure className="image">
                <img src={state.wine.image} alt={state.wine.name} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
//comment
export default WineShow
