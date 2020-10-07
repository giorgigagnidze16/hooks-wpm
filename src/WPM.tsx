import  React from 'react';

interface IProps {
    userInput: string[];
    incorrect:number;
    secondsPassed:number;
}

export function WPM(props:IProps){
    let totalInput : number = props.userInput.length;
    let incorrectInputs : number = props.incorrect;
    let secondsPassed : number = props.secondsPassed;
    let wordsPerMin : number = Math.round(((totalInput/5) - incorrectInputs) / (secondsPassed / 60));
    if (wordsPerMin === Infinity || isNaN(wordsPerMin) || wordsPerMin < 0){
        return (
            <div>
                WPM: 0
                <br/>
                accuracy:{Math.round(((totalInput-incorrectInputs) / totalInput)*100)} %
            </div>
        )
    }
    return (
        <div>
            WPM: {wordsPerMin}
            <br/>
            accuracy:{Math.round(((totalInput-incorrectInputs) / totalInput)*100)} %
        </div>
    )
}

