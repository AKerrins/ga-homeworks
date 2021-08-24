import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: ''
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      console.log('Response from API is', res)
      if (res.status === 200) {
        setToken(res.data.token)
        history.push('/wines')
      }
    } catch (err) {
      console.error('Error logging in', err)
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
        <div className="columns">
          <div className="column">
            <form
              onSubmit={handleSubmit}
              className="colum is-half is-offset-one-quarter box"
            >
              <div className="field">
                <label className="label">Username:</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    value={state.formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email:</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={state.formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password:</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={state.formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm password:</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Confirm password"
                    name="passwordConfirmation"
                    value={state.formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <input
                  className="button is-fullwidth is-warning"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
