/**
 * 게시판 번호를 생성하여 출력하는 컴포넌트
 * Props로 디비에서 마지막 번호를 가져온다.
 * URL를 통하여 페이지 번호를 받아옴.
 */

import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import styles from './pagenation.scss'
import classnames from 'classnames'

const cx = classnames.bind(styles)

const Pages = ({pageNumber,lastPage}) =>{
    const start = Math.floor((pageNumber-1) / 10) *10 +1
    
    const end = start +9 > lastPage ? lastPage : start+9;
    
    let btns = [];
    let startStyle = start <=10?{pointerEvents :'none'}:{pointerEvents :'auto'};
    let endStyles = end >=lastPage? {pointerEvents :'none'} :{pointerEvents :'auto'};

    // ! start <= 10이면 이전 페이지불가
    // ! end == lastPage 이면 다음 페이지 불가
    btns.push(
        <Link to={`/project/${start-10}`} style={startStyle} className='pagenation-btns'>
            이전
        </Link>
    )
    for(let i = start ; i <= end; i ++){
        btns.push(
            <Link to={`/project/${i}`} disabled ={true} className={cx('pagenation-btns',{'current-btn':(i==pageNumber)})}>
                {i}
            </Link>
        )
    }

    btns.push(
        <Link to={`/project/${start+10}`} style={endStyles} className='pagenation-btns'>
            다음
        </Link>
    )
    return (
        <div className='pagenation'>
            {btns}
        </div>
    )
}
class Pagenation extends Component {
    constructor(props){
        super(props)
        this.state={
            page : '',
            number : 1,
        }
    }
    render() {
        const {page} = this.props.match.params
        const {lastPage} = this.props;
        return (
            <Pages
                pageNumber = {page}
                lastPage={lastPage}
            />
        );
    }
}

export default withRouter(Pagenation);
