import React from 'react';
import MypageSide from "../mypageSide";
import classnames from 'classnames'
import styles from './styles.scss'
import Followercontent from './Followercontent'
const cx = classnames.bind(styles)
const index = ({ myInfo, followerInfo }) => {
    const {
        nickName, organization,
        userId, location, Intro, grade,
        proList, follow
    } = myInfo
    return (
        <div className={cx('mypage-page')}>
            <div className={cx('mypage-title')}>
                <h1>마이페이지</h1>
            </div>
            <div className={cx("FreeLenserDetail-wrapper")}>
                <MypageSide
                    nickName={nickName}
                    organization={organization}
                    location={location}
                    Intro={Intro}
                    grade={grade}
                    proList={proList}
                />
                <div className='follower-wrapper'>
                    <div className='follower-top'>
                        <div className='follower-title'>
                            팔로우 목록
                        </div>
                    </div>
                    <Followercontent
                        followerInfo={followerInfo}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;




