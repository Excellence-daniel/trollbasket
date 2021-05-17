import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env

export default {
  async getData(url, query = 0) {
    try {
      const config = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token'),
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
      let response = await axios.post(`${REACT_APP_SERVER_URL}${url}`, data)

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
