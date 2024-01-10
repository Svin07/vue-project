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

export default fetchSneakers
