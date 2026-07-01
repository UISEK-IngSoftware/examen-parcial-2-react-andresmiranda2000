import axios from 'axios'

const API_URL = 'https://futuramaapi.com/api/characters'

export function getCharacters() {
  return axios
    .get(API_URL, {
      params: {
        orderBy: 'id',
        orderByDirection: 'asc',
        page: 1,
        size: 50,
      },
    })
    .then((response) => response.data)
}
