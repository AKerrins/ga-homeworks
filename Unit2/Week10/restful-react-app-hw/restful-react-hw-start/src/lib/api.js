import axios from 'axios'
import { getToken } from './auth'

const baseUrl = 'https://ga-winebored.herokuapp.com'

export const getAllWines = () => {
  return axios.get(`${baseUrl}/wines`)
}

export const getSingleWine = (id) => {
  return axios.get(`${baseUrl}/wines/${id}`)
}

export const createWine = (formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
  return axios.post(`${baseUrl}/wines`, formData, requestConfig)
}

export const editWine = (id, formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
  return axios.put(`${baseUrl}/wines/${id}`, formData, requestConfig)
}

export const deleteWine = (id) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
  return axios.delete(`${baseUrl}/wines/${id}`, requestConfig)
}

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData)
}
