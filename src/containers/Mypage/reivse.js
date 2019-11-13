import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindCreateAction } from 'redux'
import { Map, fromJS, List } from 'immutable'
import ReviseComponent from 'components/revise/Revise/index.js'
import Axios from 'axios';
class reivse extends Component {

    state = {
        info:Map(),
        flag:false,
        password:'',
        rePassword:'',
        pre_password:'',
    }
    /**
     * 경력, 학력 수정
     */
    onChangeThings=(e)=>{
        const name=e.target.className.split(" ")[1];
        const {id,value} = e.target
        const {info} = this.state
        this.setState({
            info: info.set(`${name}`,info.get(`${name}`).setIn([id,'things'],value) )
        })
    }
    /**
     * 기술, 자격증 수정
     */
    onChangeList=(e)=>{
        const {value,id} = e.target;
        const {info} = this.state
        const name=e.target.className.split(" ")[1];

        this.setState({
            info: info.set(`${name}`,info.get(`${name}`).set(id,value) )
        })
    }
    AddListInput=(e)=>{
        const {value} =e.target
        const {info} = this.state
        this.setState({
            info: info.set(`${value}`,info.get(`${value}`).push(""))
        })
    }
    AddInput=(e)=>{
        const {value} =e.target
        const {info} = this.state
        const today = new Date()
        this.setState({
            info: info.set(`${value}`,info.get(`${value}`).push(Map({getDate:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,things:""})) )
        })
    }
    onChangeDay=(selectedDay, modifiers, dayPickerInput)=>{
        // 0 : name
        // 1 : index
        const {info} = this.state
        const split = dayPickerInput.props.id.split("_");
        
        this.setState({
            info: info.set(`${split[0]}`,info.get(`${split[0]}`).setIn([split[1],'getDate'],`${selectedDay.getFullYear()}-${selectedDay.getMonth()+1}-${selectedDay.getDate()}`) )
        })
    }
    onDelete=(e)=>{
        const {id} = e.target
        const name=e.target.className;
        const {info} = this.state
        this.setState({
            info: info.set(`${name}`,info.get(`${name}`).delete(id))
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { myInfo } = nextProps;
        if(!prevState.flag){
            return {
                info : fromJS(myInfo),
                flag: myInfo === ""? false:true
            }
        }
    }
    onToogleFreeFlag=(e)=>{
        const {info} =this.state;
        this.setState({
            info: info.set('freeflag',info.get('freeflag') === 0? 1 :0)
        })

    }
    /**
     * 비밀번호, 소속, 지역, 자기소개 변경이벤트
     */
    onChangeInput=(e)=>{
        const {name,value} = e.target;
        const {info} =this.state;
        if(name === 'organization' || name ==='location' || name ==='intro' || name ==='nickname'){
            this.setState({
                info : info.set(name,value)
            })
            console.log('asd');
            
        }
        else if(name ==='password'){
            this.setState({
                password:value
            })
        }
        else if(name==='pre_password'){
            this.setState({
                pre_password:value
            })
        }
        else if(name ==='rePassword'){
            this.setState({
                rePassword:value
            })
        }
    }

    onSubmit=async ()=>{
        // var post = new Object();
        const {info} = this.state;
        const {
            password,
            pre_password
        } = this.state
        if(password !== pre_password){
            alert('변경할 비밀번호가 일치하지 않습니다.')
        }
        else{
        /* 
            !! 비밀번호 변경 - test 중 주석처리함
            post.password=password
            post.pre_password= pre_password
            let res = await Axios.put('/user/update_pass',post)
            alert(res.data.message)
            window.location.reload(); 
        */
            let post = info.toJS();
            console.log(post);
            
            let res =await Axios.put(`/user/${post._id}?freeflag=${post.freeflag}`,post);

            //window.location.reload(); 
        }
        
    }
    render() {
        const {
            myInfo
        } = this.props;
        
        const {
            onDelete,
            onChangeThings,
            AddInput,
            onChangeDay,
            onChangeList,
            AddListInput,
            onChangeInput,
            onSubmit,
            onToogleFreeFlag
        }= this
        const {
            password,
            pre_password,
            rePassword,
            info
        } = this.state
        
        if (myInfo != "") {
            console.log(info.toJS());
            return (
                <ReviseComponent
                    inputdata ={info}
                    info={myInfo}
                    inputChange={onChangeThings}
                    onDelete={onDelete}
                    AddInput={AddInput}
                    inputListChange={onChangeList}
                    onChangeDay={onChangeDay}
                    AddListInput={AddListInput}
                    onChangeInput={onChangeInput}
                    password={password}
                    pre_password={pre_password}
                    rePassword={rePassword}
                    onSubmit={onSubmit}
                    onToogleFreeFlag={onToogleFreeFlag}
                />
            )
        }
        else {
            return (
                <div></div>
            )
        }


    }
}

export default connect(
    (state) => ({
        myInfo: state.base.get('myInfo'),
    }),
    (dispatch) => ({

    })
)(reivse);