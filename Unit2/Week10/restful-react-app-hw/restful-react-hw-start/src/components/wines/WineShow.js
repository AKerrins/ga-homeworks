import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getSingleWine, deleteWine } from '../../lib/api'
import { getPayload } from '../../lib/auth'

const WineShow = () => {
  const { id } = useParams()
  const history = useHistory()
  const [state, setState] = React.useState({ wine: null })

  const getSingleWineFromApi = async () => {
    try {
      const res = await getSingleWine(id)
      setState({ wine: res.data })
    } catch (err) {
      console.error(
        `An error occurred while trying to fetch a single wine ${id}`,
        err
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

  const isOwner = getPayload().sub === state.wine.user._id
  console.log('Is the owner', isOwner)

  const handleDelete = async () => {
    const wineIdToDelete = id
    try {
      await deleteWine(wineIdToDelete)
      history.push('/wines')
    } catch (err) {
      console.error(`Failed to delete cheese ${id}`, err)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{state.wine.name}</h2>
        <hr />

        <div className="columns">
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="wine glass">
                🍷
              </span>
              Tasting Notes
            </h4>
            <hr />
            <p>{state.wine.user.tastingNotes}</p>
            <hr />

            <h4 className="title is-4">
              <span role="img" aria-label="globe">
                🌎
              </span>
              Origin
            </h4>
            <p>{state.wine.user.origin}</p>
            <hr />

            <h4 className="title is-4">
              <span role="img" aria-label="wave">
                👋
              </span>
              Added by:
            </h4>
            <p>{state.wine.user.username}</p>
            <hr />

            {isOwner && (
              <>
                <Link to={`/wines/${id}/edit`} className="button is-warning">
                  Edit Wine
                </Link>

                <button className="button is-danger" onClick={handleDelete}>
                  Delete Wine
                </button>
              </>
            )}
          </div>

          <div className="column is-half">
            <figure className="image">
              <img src={state.wine.image} alt={state.wine.name} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WineShow
