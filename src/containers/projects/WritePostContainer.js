import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import WritePost from 'components/projects/WritePost'
import * as writeActions from 'store/modules/writePost.js'

class WritePostContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { history, logged ,WriteActions} = this.props;
        const {id} = this.props.match.params;
        if(id !== undefined)
            WriteActions.getContaint({id:id})
        /* if (!logged) {
            alert('로그인 후 이용하실 수 있습니다.')
            history.goBack();
        } */
    }
    componentDidUpdate(prevProp){
        const {id} = this.props.match.params;
        const { WriteActions } = this.props;
        /*  if(id === undefined)    
            WriteActions.reset(); */
    }
    componentWillUnmount(){
        const {WriteActions} =this.props;
        WriteActions.reset();
    }
    /**
     * 모집기간 선택 했을 떄 
     * 오늘날 이전 값은 무시 
     * 오늘날 이후 값은 저장
     */
    handleDatePicker = (selectedDay, modifiers, dayPickerInput) => {
        const { WriteActions } = this.props;
        const today = new Date();
        if (today > selectedDay) {
            alert('올바른 기간이 아닙니다.')
            WriteActions.changeInput({ id: 'dueDate', data: today })
            return;
        }
        else {
            WriteActions.changeInput({ id: 'dueDate', data: selectedDay })
        }
    }
    /**
     * 카테고리 선택했을 때 
     * 선택 된 건 배경을 노란색, 글자를 검은색으로 표시 > store에 저장
     * 다시 선택 되면 원래대로
     */
    onClickCategory = (e) => {
        const { value } = e.target;
        const { WriteActions } = this.props;
        const yello = 'rgb(255, 215, 79)'
        const black = 'rgb(52, 58, 64)'
        const styles = document.getElementsByClassName('category-item')[value - 1].style;
        if (styles.background === '' || styles.background === black) {
            styles.background = yello;
            styles.color = black;
        }
        else {
            styles.background = black;
            styles.color = yello;
        }
        WriteActions.changeCategory({ value: value });
    }
    /**
     * input이 변할 때 store에 저장
     */
    onChangeInput = (e) => {
        const { id, value } = e.target
        const { WriteActions } = this.props
        WriteActions.changeInput({ id: id, data: value })
    }
    /**
     * 초기화 버튼을 클릭했을 때
     */
    onClickReset = () => {
        const { WriteActions } = this.props;
        const yello = 'rgb(255, 215, 79)'
        const black = 'rgb(52, 58, 64)'
        const styles = document.getElementsByClassName('category-item');
        for(let i = 0 ; i < styles.length ; i ++){
            styles[i].style.background=black;
            styles[i].style.color=yello;
        }
        /* styles.map(item =>{
            item.style.background=black;
            item.style.color=black;
        }) */
        WriteActions.reset()
    }
    onSubmit = async()=>{
        const {
            title,
            description,
            WriteActions,
            dueDate,
            period,
        } = this.props;
        await WriteActions.postProject(title,description)
    }
    render() {
        const {
            handleDatePicker,
            onChangeInput,
            onClickCategory,
            onClickReset,
            onSubmit,
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
//        const { id } = this.props.match.params
        return (
            <WritePost
                title={title}
                price={price}
                dueDate={dueDate}
                description={description}
                period={period}
                onClickReset={onClickReset}
                maxPeople={maxPeople}
                onDayClick={handleDatePicker}
                onChangeInput={onChangeInput}
                onClickCategory={onClickCategory}
                onSubmit={onSubmit}
            />
        );
    }
}

export default connect(
    (state) => ({
        title: state.writePost.get('title'),
        price: state.writePost.get('price'),
        dueDate: state.writePost.get('dueDate'),
        catList: state.writePost.get('catList'),
        period: state.writePost.get('period'),
        maxPeople: state.writePost.get('maxPeople'),
        description: state.writePost.get('description'),
        logged: state.base.get('logged')
    }),
    (dispatch) => ({
        WriteActions: bindActionCreators(writeActions, dispatch)
    })
)(withRouter(WritePostContainer));