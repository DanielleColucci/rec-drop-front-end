import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/playlist`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (recData) => {
  try {
    const res = fetch(`${BASE_URL}/create`, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
}