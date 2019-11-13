/**
 * 로그인 된 상태에서 타임라인을 받아와서 우측 상단에 표시.
 * writer을 클릭하면 freeLenserDetail창으로 Link
 * 글을 클릭하면 ProjectDetail로 Link
 */
import React from 'react';
import classnames from 'classnames'
import styles from './styles.scss'
import {Link} from 'react-router-dom'
import {format} from 'lib/functions.js'
const imgSrc = "https://scontent.ficn3-1.fna.fbcdn.net/v/t1.0-1/p200x200/42135641_1894679573979032_7136233916314157056_n.jpg?_nc_cat=108&_nc_oc=AQlwd9nh7sPfN1VZJ75panQPdTySUMTdtP51y1RFleHYHAFS92s2yZlM4qDzHG5I8Wk&_nc_ht=scontent.ficn3-1.fna&oh=4a6b9e8645545cc0b5190f5e1c9b3a3a&oe=5DD275CF"
const cx = classnames.bind(styles)
/**
 * writer : string
 * projectOID : ObjectID
 * writerOID : ObjectID
 * writeDate : Date
 * */

const Lines =({timeline})=>{
  let line = timeline.map(item =>{
    const {writer,projectOID, userOID,writeDate} = item
    
    return (
      <div className='newfeed-line'>
        <div className='newfeed-line-writer'>
          <Link to={`/freeLenser/detail/${userOID}`}  title={writer}>
            <div className='newfeed-line-writer-img'> <img src ={imgSrc}/> </div>
            <div className='newfeed-line-writer-name'> {writer} </div>
          </Link>
        </div>

        <div className='newfeed-line-text'>
          
            <div className='newfeed-line-content'>
              <Link to={`/project/post/${projectOID}`}>
                게시글을 작성하였습니다.
              </Link>
            </div>
          <div className='newfeed-line-date'>{format(new Date(writeDate))}</div>
        </div>
      </div>
    )
  })
  return line
}
const index = ({timeline,visible,onCloseClick}) => {
  return (
    <div className={cx('newfeed-wapper',{'newfeed-wrapper-close':!visible})}>
      <div className={cx('newfeed-title')}>
        <span>알림</span>
        <span onClick={onCloseClick} style={{"fontSize": "15px","color":"#000","paddingRight":"10px"}}>
          <i className="far fa-times-circle"></i>
        </span>
      </div>
      <div className='zzz'>
        {timeline!=="" && <Lines timeline ={timeline}/>}

      </div>
    </div>
  );
};

export default index;
  