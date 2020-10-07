import React, {ReactElement, useEffect} from 'react';
import './App.css';
import {WPM} from './WPM'
import {Letter} from './Letter'

function App() {
  const [userInput,userInputUpdate]  = React.useState<string[]>([]);
  let [interval, updateInterval] = React.useState<any>();
  const [startTime, setStartTime] = React.useState(false);
  const [finished, finishedOrNot] = React.useState(false);
  const [incorrect, updateIncorrectInputs] = React.useState(0);
  const [timerSeconds,updateTimer]  = React.useState(0);
  const defaultText = ('California is considered a global trendsetter in popular culture, communication, information, innovation, environmentalism, economics, politics, and entertainment. As a result of the state\'s diversity and migration, California integrates foods, languages, and traditions from other areas across the country and around the globe. It is considered the origin of the American film industry, the hippie counterculture, barbecue, fast food, beach and car culture, the Internet, and the personal computer, among others.').split('');


    useEffect(() => {
        if (startTime) {
            const timer = setTimeout(() => {
                updateTimer(timerSeconds + 1);
            }, 1000);
        }
        updateMistakes();
    });

    function updateMistakes() {
    let counterIncorrect =0 ;
    for(let i=0; i <userInput.length;i++){
      if (userInput[i] !== defaultText[i]){
        counterIncorrect++;
      }
    }
    updateIncorrectInputs(counterIncorrect);
  }
   function onFinish () {
     if (userInput.length >= defaultText.length){
       clearInterval(interval);
       finishedOrNot(true)
         setStartTime(false);
     }
   }
   function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
   userInputUpdate(e.target.value.split(''));
   setStartTime(true);
   onFinish();
   }

  return (
      <div className={"mainDiv"}>
          {

              defaultText.map((val,index) => {

                  return <Letter key = {index}
                                 Symbol={val}
                                 isCorrect={val === userInput[index]}
                                 isCurrent={index === userInput.length}
                                 hasTyped={index < userInput.length}
                  />
              })
          }

          <textarea onChange={handleChange} className={"inputArea"} spellCheck={"false"} unselectable={"on"} onKeyUp={updateMistakes} readOnly={finished}>

        </textarea>

          <div className={"wmp-div"}>
              <WPM userInput={userInput} incorrect={incorrect} secondsPassed ={timerSeconds} />

          </div>
      </div>
  );
}


export default App;
