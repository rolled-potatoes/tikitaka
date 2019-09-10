import axios from 'axios'
import datas from 'data/datas.json'
/*import queryString  from'query-string'*/

export const getProject =(id)=> axios.get(`/api/project/${id}`) 
export const login = (email, password) => axios.post('/api/auth/login',{email,password})
export const checkLogin = () =>axios.get('/api/auth/check')

export const logout= ()=> axios.post('/api/auth/logout')

export const getFreeInfo = (id)=>{
    let data =datas.freeLenserList;
    return data.find(item =>{
        return item.id == id
    })
}
export const getPost = (id) =>{
    let data= datas.projectList;
    return data.find(item =>{
        return item.id == id
    })
}
export const getPorjectList =(page)=>{
    let data= datas.projectList;
    let lastNumber = Math.floor(data.length/10) + (data.length%10 >0 ? 1 : 0 );
    return {
        data:data.slice((page-1)*10,page *10),
        lastNumber : lastNumber
    }
}
export const getFreeList=(page)=>{
    let data = datas.freeLenserList;
    let isLast = datas.freeLenserList.length <(page)*12? true:false;
    return { 
        data:data.slice((page-1)*12,page*12),
        isLast : isLast
    };
    
}