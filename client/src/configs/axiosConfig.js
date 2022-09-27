import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export default axiosInstances