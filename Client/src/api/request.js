import ky from 'ky'

const firebaseApi = ky.create({
  prefixUrl: 'https://database-bff91-default-rtdb.firebaseio.com'
})

export const sendData = (data) => {
  return firebaseApi.post('data.json', { json: data })
}
const strapiApi = ky.create({
  prefixUrl: 'http://localhost:1337/api'
})
export const fetchData = () => {
  return strapiApi.get('Glavnaya?populate=deep,*').json()
}
