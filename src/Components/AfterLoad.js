import Commenthandling from './Commenthandling';
import React from 'react';


const AfterLoad = ({content}) => {
    return (
        <div>
            <Commenthandling content={content}/>    
        </div>

    );
}

export default AfterLoad;