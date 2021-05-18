import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env
const headers = {
  'Access-Control-Allow-Headers':
    'x-access-token,X-Requested-With,Content-Type,Authorization,cache-control',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
  'Access-Control-Allow-Credentials': true,
}

export default {
  async getData(url, query = 0) {
    try {
      const config = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
          ...headers,
        },
        params: query,
      }
      let response = await axios.get(`${REACT_APP_SERVER_URL}/${url}`, config)
      return response.data
    } catch (error) {
      console.log({ error })
      // if (
      // 	error.response &&
      // 	error.response &&
      // 	error.response.status &&
      // 	error.response.status.toString() === '403'
      //     ) {
      // 	if (
      // 	  error.response.data &&
      // 	  error.response.data.message === 'Token expired.'
      // 	) {
      // 	  await this.signOut();
      // 	  window.location.href = '/login';
      // 	}
      //     } else {
      // 	throw error;
      //     }
    }
  },

  async postDataNoAuth(url, data) {
    try {
      let response = await axios.post(`${REACT_APP_SERVER_URL}${url}`, data, {
        headers,
      })

      return response.data
    } catch (error) {
      if (
        error.response &&
        error.response.status &&
        error.response.status.toString() === '403'
      ) {
        if (
          error.response.data &&
          error.response.data.message === 'Token expired.'
        ) {
          //     await this.signOut()
          window.location.href = '/login'
        }
      } else {
        throw error
      }
    }
  },
}
