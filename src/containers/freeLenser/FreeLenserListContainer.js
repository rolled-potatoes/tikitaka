import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import datas from 'data/datas.json'
import axios from 'axios'

import * as flActions from 'store/modules/FreeLenserList.js'
import FreeLenserListComponent from 'components/freeLenser/FreeLenserList/index.js'
/**
 * 프리랜서 리스트 페이지
 * 12개의 데이터를 보여줌
 * 이후 스크롤이 다 되면 12개를 추가로 가져옴
 */
class FreeLenserListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: '',
            catName: '카테고리',
            showcat: false,
        }
    }

    //페이지 들어올때 스크롤 이벤트 생성
    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener("scroll", this.handleScroll);
        this.props.FLActions.getList();
    }
    //페이지 나갈때 스크롤 이벤트 제거
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = async () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { FLActions, loadding, isLast,page} = this.props;
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        if ((scrollHeight - innerHeight - scrollTop < 100) && loadding && !isLast) {
            FLActions.able_loadding({ bol: false })

            setTimeout(() => {
                FLActions.getList();
            }, 500)
            
        }
    }
    _testAtion = async () => {
        const id = "egoing7777@gmail.com";
        const pw = "111111";
        let temp = await axios.post('/auth/login_process', { email: id, password: pw })
    }

    changeSearchString = (e) => {
        const { value } = e.target;
        this.setState({
            searchString: value
        })
    }
    keyPressSearchSring = (e) => {
        const { key } = e
        if (key === 'Enter') {
            this.onClickSearch();
        }
    }
    _ontoggle = () => {
        const { showcat } = this.state;
        this.setState({
            showcat: !showcat
        })
    }
    onClickCat = (e) => {
        this.setState({
            catName: e.target.value
        })
    }
    onClickSearch = () => {
        const { history } = this.props;
        const { searchString } = this.state;
        history.push(`/freeLenser?search=${searchString}`)
    }
    render() {
        const {
            searchString,
            catName,
            showcat,

        } = this.state
        const {
            changeSearchString,
            keyPressSearchSring,
            onClickSearch,
            _testAtion,
            onClickCat,
            _ontoggle
        } = this
        const {
            FreeList,
            loadding
        } = this.props
        return (
            <FreeLenserListComponent
                _ontoggle={_ontoggle}
                showcat={showcat}
                catName={catName}
                loadding={loadding}
                onClickCat={onClickCat}
                list={FreeList.toJS()}
                searchString={searchString}
                onChange={changeSearchString}
                onClickSearch={onClickSearch}
                onKeyPress={keyPressSearchSring}
            />

        );
    }
}

export default connect(
    (state) => ({
        FreeList: state.FreeLenserList.get('FreeList'),
        loadding: state.FreeLenserList.get('loadding'),
        isLast: state.FreeLenserList.get('isLast'),
        page : state.FreeLenserList.get('page'),
    }),
    (dispatch) => ({
        FLActions: bindActionCreators(flActions, dispatch)
    })
)(withRouter(FreeLenserListContainer));