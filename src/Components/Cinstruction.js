import ConvertToFile from './ConvertToFile';
import React from 'react';

const destination = 
{
 null  : "000",
 M : "001",
 D : "010" ,
 MD  : "011",
 A  : "100" ,
 AM : "101" ,
 AD : "110",
 AMD  : "111" 
}
const  jump = {
null  : "000",
JGT : "001",
JEQ : "010" ,
JGE  : "011",
JLT  : "100" ,
JNE : "101" ,
JLE : "110",
JMP  : "111" 
}

const compare = [
{ comparision: "0", toBinary: "0101010"},
{ comparision: "1", toBinary: "0111111"},
{ comparision: "-1", toBinary: "0111010"},
{ comparision: "D", toBinary: "0001100"},
{ comparision: "A", toBinary: "0110000"},
{ comparision: "M", toBinary: "1110000"},
{ comparision: "!D", toBinary: "0001101"},
{ comparision: "!A", toBinary: "0110001"},
{ comparision: "!M", toBinary: "1110001"},
{ comparision: "-D", toBinary: "0001111"},
{ comparision: "-A", toBinary: "0110011"},
{ comparision: "-M", toBinary: "1110011"},
{ comparision: "D+1", toBinary: "0011111"},
{ comparision: "A+1", toBinary: "0110111"},
{ comparision: "M+1", toBinary: "1110111"},
{ comparision: "D-1", toBinary: "0001110"},
{ comparision: "A-1", toBinary: "0110010"},
{ comparision: "D+A", toBinary: "0000010"},
{ comparision: "D-A", toBinary: "0010011"},
{ comparision: "A-D", toBinary: "0000111"},
{ comparision: "D&A", toBinary: "0000000"},
{ comparision: "D|A", toBinary: "0010101"},
{ comparision: "M-1", toBinary: "1110010"},
{ comparision: "D+M", toBinary: "1000010"},
{ comparision: "D-M", toBinary: "1010011"},
{ comparision: "M-D", toBinary: "1000111"},
{ comparision: "D&M", toBinary: "1000000"},
{ comparision: "D|M", toBinary: "1010101"}
]



const Cinstruction = ({content}) => {

    const separator = (singleLine) => {
        let jmp,cmp,dst = "";
        if(singleLine.includes('=')){
            var dst_cmp = singleLine.split('=');
            dst = dst_cmp[0];

            if(!dst_cmp[1].includes(";")){
                cmp = dst_cmp[1].trim();
            }
            else if(dst_cmp[1].includes(";")){
                // if(!singleLine.includes('=')){
                //     cmp = dst_cmp[0];
                // }
               
                    var cmp_jmp = dst_cmp[1].split(";");
                    cmp = cmp_jmp[0].trim();
                    jmp = cmp_jmp[1].trim();  
                
    
            }
         }
         else{
             if(singleLine.includes(";")){
                cmp_jmp = singleLine.split(";")
                cmp = cmp_jmp[0].trim();
                jmp = cmp_jmp[1].trim();
             }
         }

       
        const separated = [cmp,dst,jmp]
        return separated;
    }

    const binaryConverter = (arrayOfSeparated) => {

            let compBinary = "";
            let destBinary = "000";
            let jumpBinary = "000";
            let cmp = arrayOfSeparated[0];
            let dst = arrayOfSeparated[1];
            let jmp = arrayOfSeparated[2];
            
            compare.map( (item) => {
                if(item.comparision === cmp){
                    compBinary =  item.toBinary;
                }
                return "compare";
            }) 

            if(dst !== undefined){
            Object.keys(destination).map((item) => {
                    if(item === dst){
                    destBinary = destination[item];
                    }
                    return "destination";
            })
            }

            if(jmp !== undefined){
                Object.keys(jump).map((item) => {
                    if(item === jmp){
                    jumpBinary = jump[item];
                    }
                    return "jump";
            })
            }
            const convertedBinaryCinst = [compBinary,destBinary,jumpBinary]
            return convertedBinaryCinst;
    }

    const concatinator = (convertedCinst) => {
        const convertedCinstruction = "111" + convertedCinst[0] + convertedCinst[1] + convertedCinst[2];
        return convertedCinstruction;
    }

    for(var x=0;x<content.length;x++){
        if(content[x].includes('=') || content[x].includes(';')){

            const arrayOfSeparated = separator(content[x]);
            const convertedCinst = binaryConverter(arrayOfSeparated);
            content[x] = concatinator(convertedCinst);
        }
    }
    console.log(content);
    return (
        <div>
            <ConvertToFile content={content}/>
        </div>
    );

}

export default Cinstruction;