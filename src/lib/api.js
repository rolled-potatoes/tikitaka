import axios from 'axios'
/*import queryString  from'query-string'*/

export const getProject =(id)=> axios.get(`/api/project/${id}`) 