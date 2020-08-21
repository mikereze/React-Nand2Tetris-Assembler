import Cinstruction from './Cinstruction';
import React from 'react';


const Ainstruction = ({content}) => {

    var regex = /@[0-9]/;

    const digits_count = (n) => {
        var count = 0;
        if(n >= 0) ++count;
        while (n/10 >= 1){
            n/= 10;
            ++count;
        }
        return count
    }


    const decimaltoBinary = (toBeBinary) => {
        const removedAt = toBeBinary.replace('@','');
        const converted = parseInt(removedAt,10).toString(2);
        const toBeFilled = 16 - digits_count(converted);
        const filler = '0'.repeat(toBeFilled);
        const binary = filler + converted;
        return binary;

    }

    
    for(var x=0;x<content.length;x++){
        if(regex.test(content[x])){
            const value = decimaltoBinary(content[x]);
            content[x] = value;
        }
    }
    return (
        <div>
            <Cinstruction content={content}/>
        </div>
    );
}

export default Ainstruction;