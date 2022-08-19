import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ec2-54-233-136-16.sa-east-1.compute.amazonaws.com:8080',
})

export default instance
