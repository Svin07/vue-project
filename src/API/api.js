import axios from 'axios'

const BASE_URL = 'https://65240d93ea560a22a4e950d9.mockapi.io/sneakers/items'

async function fetchSneakers() {
  try {
    const { data } = await axios.get(BASE_URL)

    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchSneakersbyId(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchSneakersSortBy(params) {
  try {
    const { data } = await axios.get(BASE_URL, { params })

    return data
  } catch (error) {
    console.log(error)
  }
}

async function updatedFavorites(id, value) {
  try {
    const { data } = await axios.put(`${BASE_URL}/${id}`, { favorite: value })

    return data
  } catch (error) {
    console.log(error)
  }
}

async function updatedIsAdded(id, value) {
  try {
    const { data } = await axios.put(`${BASE_URL}/${id}`, { isAdded: value })

    return data
  } catch (error) {
    console.log(error)
  }
}

export { fetchSneakers, fetchSneakersSortBy, updatedFavorites, fetchSneakersbyId, updatedIsAdded }
