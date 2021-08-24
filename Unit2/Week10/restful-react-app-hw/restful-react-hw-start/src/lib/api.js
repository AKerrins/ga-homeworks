import axios from 'axios'
const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWine = (id) => {
  return axios.get(`${baseUrl}/${id}`)
}

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData)
}
