
import axios from 'axios'

export interface LogInData {
  username: string
  password: string
}

export interface SingUpData {
  name: string
  surname: string
  username: string
  password: string
}



export const UserRemoteService = {
  login: (data: LogInData): Promise<any> => {
    return axios.post(`${import.meta.env.VITE_BASE_URL}/api/login`, data)
  },

  signup: (data: SingUpData): Promise<any> => {
    return axios.post(`${import.meta.env.VITE_BASE_URL}/api/signup`, data)
  },
}