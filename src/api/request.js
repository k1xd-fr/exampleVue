import ky from 'ky'

const firebaseApi = ky.create({ prefixUrl: 'https://database-bff91-default-rtdb.firebaseio.com' })

export const sendData = (data) => {
  return firebaseApi.post('data.json', { json: data })
}
