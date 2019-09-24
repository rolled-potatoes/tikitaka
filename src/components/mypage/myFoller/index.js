import React from "react";
import MypageSide from "../mypageSide";

const index = ({ myInfo }) => {
    const {
        nickName, organization,
        userId, location, Intro, grade,
        proList, follow
    } = myInfo
    return (
        <div>
            <div className={cx("FreeLenserDetail-wrapper")}>
                <MypageSide
                    nickName={nickName}
                    organization={organization}
                    location={location}
                    Intro={Intro}
                    grade={grade}
                    proList={proList}
                />
            </div>
        </div>
    );
};

export default index;
