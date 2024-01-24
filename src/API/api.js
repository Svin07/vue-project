import axios from 'axios'

const BASE_URL = 'https://65240d93ea560a22a4e950d9.mockapi.io/sneakers'

async function fetchSneakers() {
  try {
    const { data } = await axios.get(`${BASE_URL}/items`)

    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchSneakersbyId(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/items/${id}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchSneakersSortBy(params) {
  try {
    const { data } = await axios.get(`${BASE_URL}/items`, { params })

    return data
  } catch (error) {
    console.log(error)
  }
}

async function updatedFavorites(id, value) {
  try {
    const { data } = await axios.put(`${BASE_URL}/items/${id}`, { favorite: value })

    return data
  } catch (error) {
    console.log(error)
  }
}

async function updatedIsAdded(id, value) {
  try {
    const { data } = await axios.put(`${BASE_URL}/items/${id}`, { isAdded: value })

    return data
  } catch (error) {
    console.log(error)
  }
}

async function createOrder(obj) {
  try {
    const { data } = await axios.post(`${BASE_URL}/orders`, obj)

    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchSneakers,
  fetchSneakersSortBy,
  updatedFavorites,
  fetchSneakersbyId,
  updatedIsAdded,
  createOrder
}
