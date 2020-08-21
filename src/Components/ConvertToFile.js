import React from 'react';

const ConvertToFile = ({content}) => {


    return (
        <div>
            {content.map((item) => {
                   return  <div>{item}</div>
            })}
        </div>

    );
}

export default ConvertToFile;

