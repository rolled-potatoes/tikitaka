import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom'
import WritePost from 'components/projects/WritePost'
import * as writeActions from 'store/modules/writePost.js'
class WritePostContainer extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {history,logged} = this .props;
        console.log(history);
        
        if(!logged){
            alert('로그인 후 이용하실 수 있습니다.')
            history.goBack();
        }
    }
    handleDatePicker=(selectedDay, modifiers, dayPickerInput)=>{
        const {WriteActions} = this.props;
        const today =new Date();
        if(today >= selectedDay)
        {
            alert('올바른 기간이 아닙니다.')
            WriteActions.changeInput({id:'dueDate', data:today })
            return;
        }
        else{
            WriteActions.changeInput({id:'dueDate', data:selectedDay })
        }
    }
    onClickCategory=(e)=>{
        const {value} =e.target;
        const {WriteActions} = this.props;
        const yello = 'rgb(255, 215, 79)'
        const black = 'rgb(52, 58, 64)'
        const styles = document.getElementsByClassName('category-item')[value-1].style;
        if(styles.background === '' ||styles.background=== black ){
            styles.background = yello;
            styles.color = black;
        }
        else{
            styles.background = black;
            styles.color = yello;
        }
        WriteActions.changeCategory({value:value});
    }
    onChangeInput=(e)=>{
        const {id,value}= e.target
        const {WriteActions} = this.props
        WriteActions.changeInput({id:id, data:value })
    }
    render() {
        const { 
            handleDatePicker,
            onChangeInput,
            onClickCategory,
        } = this
        const {
            title,
            price,
            dueDate,
            catList,
            period,
            maxPeople,
            description,
        } = this.props
        return (
            <WritePost
                title={title}
                price={price}
                dueDate={dueDate}
                description={description}
                period={period}
                maxPeople={maxPeople}
                onDayClick ={handleDatePicker}
                onChangeInput={onChangeInput}
                onClickCategory={onClickCategory}
            />
        );
    }
}

export default connect(
    (state)=>({
        title: state.writePost.get('title'),
        price: state.writePost.get('price'),
        dueDate: state.writePost.get('dueDate'),
        catList: state.writePost.get('catList'),
        period: state.writePost.get('period'),
        maxPeople: state.writePost.get('maxPeople'),
        description: state.writePost.get('description'),
        logged : state.base.get('logged')
    }),
    (dispatch)=>({
        WriteActions : bindActionCreators(writeActions,dispatch)
    })
)(withRouter(WritePostContainer));