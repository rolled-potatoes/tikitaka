import React from 'react';
import PageTemplate from '../components/common/PageTemplate'

import MyLisContainer from 'containers/Mypage/myList.js'
const MyList = () => {
    return (
        <PageTemplate>
            <MyLisContainer/>
        </PageTemplate>
    );
};

export default MyList;