import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import WritePost from 'components/projects/WritePost'
import * as writeActions from 'store/modules/writePost.js'
import axios from 'axios'
import {checkLogin} from 'store/modules/base.js'
import { fromJS } from 'immutable'
import { postProject, getPost, ModifyPost } from 'lib/api.js'
class WritePostContainer extends Component {
    state = {
        modify: false
    }
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        const { history, logged, project } = this.props;
        const { id } = this.props.match.params;
        if (id !== undefined) {
            this.init(id, project)
        }
        if (localStorage.logged === 'false') {

            alert('로그인 후 이용하실 수 있습니다.')
            history.goBack();
        }
    }

    /**
     * 수정클릭 했을 때 데이터 셋팅
     */
    init = async (id, project) => {
        const { WriteActions } = this.props;
        const { modify } = this.state;
        let arr;
        if (project === "") {
            let data = await getPost(id)
            arr = data.data.project
        }
        else 
            arr = project;

        arr.catList = [];
        arr = this.initUnit(arr);
        WriteActions.getContaint({ project: arr })
        if (!modify)
            this.setState({ modify: true })
    }

    initUnit=(arr)=>{
        const categorys = ["디자인", "영상", '번역', '코딩', '음악', '공학', '스터디', '기타'];
        const yello = 'rgb(255, 215, 79)'
        const black = 'rgb(52, 58, 64)'
        let  styles = document.getElementsByClassName('category-item')

        arr.categoryList.map(i => {
            let index = categorys.findIndex(it => {
                return it == i
            })
            arr.catList.push(`${index + 1}`)
            styles[index].style.background = yello;
            styles[index].style.color = black;
        })
        arr.catList = fromJS(arr.catList);
        return arr
    }
    componentDidUpdate(prevProp) {
        const { id } = this.props.match.params;
        const { WriteActions } = this.props;
        /*  if(id === undefined)    
            WriteActions.reset(); */
    }
    componentWillUnmount() {
        const { WriteActions } = this.props;
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
        let dif=selectedDay - today;
        let cDay = 24 * 60 * 60 * 1000;
        let flag = parseInt(dif/cDay) 
        if (flag <0 && flag !=-0) {
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
        for (let i = 0; i < styles.length; i++) {
            styles[i].style.background = black;
            styles[i].style.color = yello;
        }
        /* styles.map(item =>{
            item.style.background=black;
            item.style.color=black;
        }) */
        WriteActions.reset()
    }
    /**
     * 글 저장 버튼액션
     * 카테고리가 번호로 지정되어 있어 배열에서 String 검색
     */
    onSubmit = async () => {
        const categorys = ["디자인", "영상", '번역', '코딩', '음악', '공학', '스터디', '기타'];
        const { id } = this.props.match.params;
        const {CheckLogin} = this.props;
        const { modify } = this.state;
        const {
            title,
            price,
            period,
            description,
            maxPeople,
            dueDate,
            catList,
            history,
        } = this.props;

        let list = catList.map(i => {
            return (
                categorys[i - 1]
            )
        })
        
        if(title !== "" && price !=="" && period !=='' && description !=='' && maxPeople !='' && list.size !=0){
            if (modify) {
                const post = {
                    title: title,
                    description: description,
                    period: period,
                    maxPeople: maxPeople,
                    dueDate: dueDate,
                    price: price,
                    categoryList: list
                }
                const res = await ModifyPost(id, post)
                alert('수정')
                
            }
            else {
                const res = await postProject({
                    title: title,
                    description: description,
                    period: period,
                    maxPeople: maxPeople,
                    dueDate: dueDate,
                    price: price,
                    categoryList: list
                })
                alert(res.data.flag)
            }
            await CheckLogin()
            history.push('/')
        }else{
            return alert('값을 입력하십시오.')

        }
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
        logged: state.base.get('logged'),
        project: state.ProjectPost.get('project'),

    }),
    (dispatch) => ({
        WriteActions: bindActionCreators(writeActions, dispatch),
       CheckLogin : bindActionCreators(checkLogin,dispatch),

    })
)(withRouter(WritePostContainer));