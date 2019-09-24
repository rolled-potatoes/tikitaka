import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindCreateAction } from 'redux'
import { Map, fromJS, List } from 'immutable'
import ReviseComponent from 'components/revise/Revise/index.js'
class reivse extends Component {

    state = {
        info:Map(),
        flag:false,
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
        console.log(info.toJS());
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
        }= this
        if (myInfo != "") {
            return (
                <ReviseComponent
                    inputdata ={this.state.info}
                    info={myInfo}
                    inputChange={onChangeThings}
                    onDelete={onDelete}
                    AddInput={AddInput}
                    inputListChange={onChangeList}
                    onChangeDay={onChangeDay}
                    AddListInput={AddListInput}
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