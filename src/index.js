import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
//import {robots} from './robots';

ReactDOM.render(
  <React.StrictMode>
    {/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />*/}

    {<App/>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
