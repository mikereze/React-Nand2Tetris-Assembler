import React from 'react';


const ImportFromFileComponent = ({handleFileChosen}) => {
    return (
        <div >
        <p>Hello there you can load your assembly code</p>
        <input type='file'
                accept=".asm"
                onChange={ (e) => handleFileChosen(e.target.files[0])}/>
        </div>

    );
}

export default ImportFromFileComponent;