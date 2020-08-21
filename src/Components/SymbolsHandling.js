import React from 'react';
import Ainstruction from './Ainstruction'

const symbols = {
    R0 : "0",
    R1 : "1",
    R2 : "2",
    R3 : "3",
    R4 : "4",
    R5 : "5",
    R6 : "6",
    R7 : "7",
    R8 : "8",
    R9 : "9",
    R10 : "10",
    R11 : "11",
    R12 : "12",
    R13 : "13",
    R14 : "14",
    R15 : "15",
    SCREEN : "16384",
    KBD : "24576",
    SP : "0",
    LCL : "1",
    ARG : "2",
    THIS : "3",
    THAT : "4"
}

const SymbolsHandling = ({content}) => {
    return (
        <div>
            <Labelhandling content={content}/>
        </div>
    );
}


const Labelhandling = ({content}) => {


    // const regLabel = /([A-Z])/;
    let numberOfLabelsPassed = 0;
    let content_updated = [];
 
 
     const extractor = (singleLine) => {
         const temp = singleLine.replace("(","");
         const temp2 = temp.replace(")","");
         return temp2;
     }
 
     const addAndReplaceLabels = (singleLine_content,x,numberOfLabelsPassed) => {
             symbols[singleLine_content] = x-numberOfLabelsPassed;
             const tobeReturned =  x - numberOfLabelsPassed;
             return tobeReturned;
             
     }
 
     for(var x=0;x<content.length;x++){

      if(content[x].includes('(')){
        
         const extracted = extractor(content[x]);
         const toBeUpdated = "@" + addAndReplaceLabels(extracted,x,numberOfLabelsPassed);
         numberOfLabelsPassed++;
      }
      else if(!content[x].includes('(') && !content[x].includes(')')){
          content_updated.push(content[x]);
      }
 }  

 return (
     <div>
     <Variablehandlng content= {content_updated}/>
     </div>
 );
 }


 const Variablehandlng = ({content}) => {

    let count = 16;
    const regAinstruction = /@[0-9]/;

    const addNewVariables = (tobeAddedSymbol) => {
    
        symbols[tobeAddedSymbol] = count.toString();
        const tobeReplaced =  replacExisitingVariables(tobeAddedSymbol);
        count++;
        return tobeReplaced;
}

const replacExisitingVariables = (singleLine_content) => {
    Object.keys(symbols).map((item) => {
        if(singleLine_content.trim() === item){
            let updatedSymbol = "@" + symbols[item];
            singleLine_content = updatedSymbol;   
        }
    })
    return singleLine_content;
}

for(var x=0;x<content.length;x++){
    if(content[x].includes('@') && !regAinstruction.test(content[x])){
        content[x] = content[x].replace('@','');

        if(Object.keys(symbols).includes(content[x].trim())){
            const  replacedVarible = replacExisitingVariables(content[x]);
            content[x] = replacedVarible;
          
        }
        else{
                const  updatedVariable = addNewVariables(content[x].trim());
                content[x] = updatedVariable;
             
        }
    }
   
}
return (
    <div>
        <Ainstruction content={content}/>
        </div>
);

}

<<<<<<< HEAD
 export default SymbolsHandling;
=======
 export default SymbolsHandling;
>>>>>>> Fixed
