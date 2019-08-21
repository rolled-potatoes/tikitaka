import axios from 'axios'
/*import queryString  from'query-string'*/

export const getProject =(id)=> axios.get(`/api/project/${id}`) 
export const login = (email, password) => axios.post('/api/auth/login',{email,password})

export const logout= ()=> axios.post('/api/auth/logout')
