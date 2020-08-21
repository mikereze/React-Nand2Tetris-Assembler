import SymbolsHandling from './SymbolsHandling';
import React from 'react';

const Commenthandling = ({content}) => {

    const regexAinst = /@/
    const regexCinst = /[A-Za-z]/


    const content_main = [];

    for(var x= 0;x < content.length; x++){
        const singleLine = content[x].trim();
        if(!singleLine.startsWith("//") && (regexAinst.test(singleLine) || regexCinst.test(singleLine))) {
            if(singleLine.includes("//")){
                    const index = singleLine.indexOf("/");
                    content_main.push((singleLine.slice(0,index)).trim());

                    console.log("Check mike");
            }
            else{
                content_main.push(singleLine.trim());
                console.log("Check too");

            }


           }
        }

        console.log("This is from Comment LAst",content_main)

    return (
            <div>
            <SymbolsHandling content={content_main}/>
            </div>
    );
}

export default Commenthandling;