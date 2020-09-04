import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

{/* <React.StrictMode>
</React.StrictMode>
may need to put this back around app if run into problems, took out because was causing double render of componenets  */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

