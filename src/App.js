import React from 'react';
import './App.css';
import {useState} from 'react';
import ImportFromFileComponent from './Components/ImportFromFileComponent';
import AfterLoad from './Components/AfterLoad';

const App = () => {


    let fileReader;
    const [ content, setContent] = useState(" ");
    const [ loaded,  setLoaded] = useState(false);

    const handleFileRead = (e) => {
            setLoaded(true)
            setContent(() => fileReader.result.trim().split("\n"));
    }

    const handleFileChosen = (file) => {
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(file);
    }

    return (
        <div>
        <ImportFromFileComponent handleFileChosen={handleFileChosen}/>
        {loaded && <AfterLoad content={content}/>}
        </div>
    );
}
export default App;