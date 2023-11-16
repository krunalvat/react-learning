import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import {addition, subtraction, multiplication, division} from './Calculator';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import ImportExport,{ FavDish, YourName, YourAge } from './ImportExport'; // Lern Import Export Features
// import * as Import from './ImportExport'; // Lern Import Export Features Second Example
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(<h1>Hello</h1>,document.getElementById('root')); //single render jsx

ReactDOM.render(
    <BrowserRouter basename="/react-learning">
     <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// // using inline css to to element

// ReactDOM.render(
//     <>
//     <h1 style={{ backgroundColor :"red", textAlign : "center", fontSize : "large"}}>Image Gallery Inline Css</h1>
//     </>,document.getElementById('image-gallery-inline'));

//Import Export Features
// ReactDOM.render(<> 
//     <h1>{`Fav Color is:- ${ImportExport} `}</h1> 
//     <h2>  {`Fav Dish  is:- ${FavDish} `} </h2>
//     <h3>  {`Your Name  is:- ${YourName()} `} </h3>
//     <h4>  {`Your Age  is:- ${YourAge()} `} </h4>
//     </>,document.getElementById('import-export'));


//Import Export Features Second Example

// // ReactDOM.render(<> 
// //     <h1>{`Fav Color is:- ${ Import.default} `}</h1> 
// //     <h2>  {`Fav Dish  is:- ${Import.FavDish} `} </h2>
// //     <h3>  {`Your Name  is:- ${ Import. YourName()} `} </h3>
// //     <h4>  {`Your Age  is:- ${ Import. YourAge()} `} </h4>
// //     </>,document.getElementById('import-export'));


// ReactDOM.render(
// <> 
//  { `Sum Of Number is:  ${addition(40,4)}  `}
//  { `Subtraction Of Number is:  ${subtraction(40,4)} `}
//  { `Multiplication Of Number is:  ${multiplication(40,4)} `}
//  { `Division Of Number is:  ${division(40,3)} `}

// </>,document.getElementById('calculator-data'));


// ReactDOM.render([
//     <h1>Hello</h1>,
//     <p>this is paragraph tag</p>,
//     ],
//     document.getElementById('root')
//     ); //single render jsx

// ReactDOM.render(
//     <>
//     <h1>Learn useState</h1>
//     < UseStateExample/>
//     </>,document.getElementById('use-state-example')
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
