import React from 'react';
import { RingLoader } from 'react-spinners';
import './styles.scss'
const Loading = ({}) => {
    
    return (
        <div className='loading'>
            <RingLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={true}
            />
        </div>
    );
};

export default Loading;