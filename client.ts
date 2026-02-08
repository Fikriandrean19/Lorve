import axios from 'axios'
const axiosIns = axios.create({
    headers: {'Accept': 'application/json'},
    withCredentials: true
})
export default axiosIns
