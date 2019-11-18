import axios from 'axios'
import datas from 'data/datas.json'
/*import queryString  from'query-string'*/

export const getProject =(id)=> axios.get(`/api/project/${id}`) 
export const getProjectList = ({pageId,size,order,text,cat})=>{
    return axios.get(`/project?pageId=${pageId}&size=${size}&order=${order}&text=${text}&cat=${cat}`)
}
//export const login = (email, password) => axios.post('/api/auth/login',{email,password})

 export const login = (userId, password) => axios.post('/auth/login_process',{userId,password})

//export const checkLogin = () =>axios.get('/api/auth/check')

export const checkLogin = () =>axios.get('/main')
export const getPost = (id) => axios.get(`/project/${id}`)
export const logout= ()=> axios.get('/auth/logout')
export const getFreeInfo = (id)=> axios.get(`/user/${id}?freeflag=1`)
export const ModifyPost= (id,post)=> axios.put(`/project/${id}?flag=4`,{post})
export const removePost =(id) => axios.delete(`/project/${id}`)
export const applyProject = async (id) => {
    let res = await axios.put(`/project/${id}?flag=1`).then(res=> res= res.data)
    return res;
}
export const DenyApply = (id,value ) => axios.put(`/project/${id}?flag=3&userOId=${value}`)
export const agreeApply = async (id,value) => {
    let res = await axios.put(`/project/${id}?flag=2&userOId=${value}`).then(res=> res= res.data)
    return res;
}
export const getFreeList=({page,size,order,text,cat})=>axios.get(`/user/?pageId=${page}&size=${size}&order=${order}&text=${text}&cat=${cat}`)

export const singup = async (userId, password,name,nickname,location,organization) => {
    const a = await axios.post('/user',{userId,password,name,nickname,location,organization})   
    return a.data
}

export const test =()=> axios.get('/zz'); 
export const postProject=async ({title,description,period,maxPeople,dueDate,price,categoryList}) => {
    const res = await axios.post('/project',{title,description,period,maxPeople,dueDate,price,categoryList});
    return res;
}
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

export const getCandidateInfo = async(list)=>{
    let results = []
    for(let _id of list){        
        let data = await axios.get(`/user/${_id}?freeflag=1`).then(res => res = res.data.user)
        results.push({
            nickname: data.nickname,
            email : data.userId,
            organization:data.organization,
            categoryList:data.categoryList,
            _id : _id,
        })
    }

    return new Promise(resolve => resolve(results))
    
}
export const getNewFeed =()=>{
    let data = datas.timeline;
    return data;
}
export const getMyInfo =()=>{
    let data = datas.myInfo;
    return data;
}
// export const getFreeInfo = (id)=>{
//     let data =datas.freeLenserList;
//     return data.find(item =>{
//         return item.id == id
//     })
// }
// export const getPost = (id) =>{
//     let data= datas.projectList;
//     return data.find(item =>{
//         return item.id == id
//     })
// }
export const getPorjectList =(page)=>{
    let data= datas.projectList;
    let lastNumber = Math.floor(data.length/10) + (data.length%10 >0 ? 1 : 0 );
    return {
        data:data.slice((page-1)*10,page *10),
        lastNumber : lastNumber
    }
}
