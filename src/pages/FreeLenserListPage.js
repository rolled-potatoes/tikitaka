import React from 'react';
import PageTemplate from '../components/common/PageTemplate'
import FreeLenserListContainer from 'containers/freeLenser/FreeLenserListContainer.js';
 
const FreeLenserListPage = () => {
    return (
        <PageTemplate>
            <FreeLenserListContainer/>
        </PageTemplate>
    );
};

export default FreeLenserListPage;