// Import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component 

function getButtonText(){
  return 'Click On Me!';
}
// const App = () => {

//   const buttonText = 'Click Me'; 
//   const lableText = {text: 'Enter your name:'}
//     return (
//     <div>
//     <label className="lable" htmlFor="name">{lableText.text}</label>
//     <input id="name" type="text"/>
//     <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
//   </div>);
// }


function getTime(){
  return (new Date()).toLocaleTimeString()
}

const App = () => {
  return (
    <div>
      <div>Current Time</div>
      <h3>{getTime()}</h3>
    </div>
  );
}
// Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);