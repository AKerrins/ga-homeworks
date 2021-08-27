import React from 'react'
import { useHistory } from 'react-router-dom'
import { createWine } from '../../lib/api'
import WineNameField from '../fields/WineNameField'
import TastingNotesField from '../fields/TastingNotesField'
import ImageUrlField from '../fields/ImageUrlField'
import OriginField from '../fields/OriginField'

const WineNew = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    formData: {
      tastingNotes: '',
      origin: '',
      image: '',
      name: ''
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(state.formData)
      const result = await createWine(state.formData)
      console.log(result.data._id)
      history.push(`/wines/${result.data._id}`)
    } catch (err) {
      console.error('Error registering user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value
    }
    setState({ formData })
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">Specify your new wine</h2>
        <hr />

        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
            <WineNameField
              handleChange={handleChange}
              name={state.formData.name}
            />
            <TastingNotesField
              handleChange={handleChange}
              tastingNotes={state.formData.tastingNotes}
            />
            <OriginField
              handleChange={handleChange}
              origin={state.formData.origin}
            />
            <ImageUrlField
              handleChange={handleChange}
              image={state.formData.image}
            />
            <div className="field">
              <input
                className="button is-fullwidth is-warning"
                type="submit"
                value={`Add ${state.formData.name || 'new wine'}`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default WineNew
