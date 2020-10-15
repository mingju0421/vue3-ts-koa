import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/'

axios.interceptors.request.use((config: AxiosRequestConfig) => config)

axios.interceptors.response.use((response: AxiosResponse) => {
    if(response.status !== 200) {
        return Promise.reject(response.data.data)
    }
    return response.data
}, err => Promise.reject(err))

export default axios