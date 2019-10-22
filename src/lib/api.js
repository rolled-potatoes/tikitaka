import axios from 'axios'
import datas from 'data/datas.json'
/*import queryString  from'query-string'*/

export const getProject =(id)=> axios.get(`/api/project/${id}`) 
//export const login = (email, password) => axios.post('/api/auth/login',{email,password})

 export const login = (userId, password) => axios.post('/auth/login_process',{userId,password})

//export const checkLogin = () =>axios.get('/api/auth/check')
export const checkLogin = () =>axios.get('/main')

export const logout= ()=> axios.get('/auth/logout')
//export const singup = (userId, password) => axios.post('/auth/register_process',{userId,password})
export const singup = (userId, password) => axios.post('/user/register_process',{userId,password})

export const test =()=> axios.get('/zz'); 
export const postProject=(title,description) => axios.post('/project/create_process',{title,description});
export const naver =()=> axios.get('/auth/naver');

export const getFollowerInfo = ({follow})=>{
    let data = datas.freeLenserList;
    let follower = [];
    follow.map(item =>{
        follower.push(
            data.find(node =>{
                return item == node.email
            })
        )
    })
    return follower;
}
export const getCandidateInfo =(list)=>{
    let data = datas.freeLenserList;
    let frees=[]
    list.map(item =>{
        frees.push(
            data.find(free=>{
            return free.id == item
        }))
    })
    return frees;
}
export const getNewFeed =()=>{
    let data = datas.timeline;
    return data;
}
export const getMyInfo =()=>{
    let data = datas.myInfo;
    return data;
}
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