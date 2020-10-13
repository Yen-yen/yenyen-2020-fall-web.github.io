import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <body>
    <h1>滕若妍 Yen-yen</h1>
    <h1>滕若妍 Yen-yen</h1>
    <h1>滕若妍 Yen-yen</h1>
    <h1>滕若妍 Yen-yen</h1>
    <h1>滕若妍 Yen-yen</h1>
    <h1>滕若妍 Yen-yen</h1>
    <h1>電機四</h1>
    <h1>電機四</h1>
    <h1>電機四</h1>
    <h2>B06901008</h2>
    <h2>B06901008</h2>
    <h2>B06901008</h2>
  </body>,
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={Bcomponent}></Route>
    <Route path="/show-all" component={Ccomponent}></Route>
    <Route path="/create-rest" component={Acomponent}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
