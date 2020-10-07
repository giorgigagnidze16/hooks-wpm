import React from 'react'

type letterTypes = {
    Symbol:string;
    isCorrect:boolean;
    isCurrent:boolean;
    hasTyped:boolean;
}
export const Letter =  React.memo<letterTypes>(({Symbol,isCorrect,isCurrent,hasTyped}) => {
    let backgroundColor : string  = '';
    let color : string = '';
    if (hasTyped){
        backgroundColor = isCorrect ? "#e7fbd3" : "pink"
        color = isCorrect ? "#0e630e" : "darkred"
    }
    return <span style={{
        backgroundColor: backgroundColor,
        color: color,
        marginRight: 3,
        borderRadius: 4,
        borderRight: 0,
        borderLeft: 0,
        borderTop: 0,
        borderBottom: isCurrent ? '3px solid #00416d' : 0
    }}>{Symbol}</span>
})