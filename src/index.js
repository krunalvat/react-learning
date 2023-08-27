import React from 'react';
import  ReactDOM  from 'react-dom';

// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(<h1>Hello</h1>,document.getElementById('root')); //single render jsx
var name = "Krunal Vatvani";

const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/300";
const image3 = "https://picsum.photos/250/300";
const link = "http://localhost:3000/";

ReactDOM.render(<h1> My Name is:-  { name }</h1>,document.getElementById('krunal'));

// Challenage Number 1
ReactDOM.render(
    <>
        <h1> Netflic Pick </h1>
        <p> Name of Netflic Pick </p>
        <ol>
            <li>The Monkey King</li>
            <li>The Pope's Exorcist</li>
            <li>Half Brothers</li>
            <li>Hidden Strike</li>
            <li>What Men Want</li>
        </ol>
    </>
,document.getElementById('challenge'));


//Challenge 2 

ReactDOM.render(
<> 
<h1>{`Helo, My Name is ${name}`}</h1>
<p> Current Date is:- { new Date().toLocaleDateString()}</p>
<p> Current Time is:- { new Date().toLocaleTimeString() }</p>
</>,document.getElementById('challenge-second'));


// using external css add css to className
ReactDOM.render(
<>
<h1 className='heading'>Image Gallery</h1>
<div className='img_div'>

    <a href={link}>
        <img src= {image1} alt="randomImage" />
    </a>
    <img src= {image2} alt="randomImage" />
    <img src= {image3} alt="randomImage" />


</div>


</>,document.getElementById('image-gallery'));


// using inline css to to element

ReactDOM.render(
    <>
    <h1 style={{ backgroundColor :"red", textAlign : "center", fontSize : "large"}}>Image Gallery Inline Css</h1>
    </>,document.getElementById('image-gallery-inline'));


// challeange 3

let time = new Date(2023,8,26,16);
 time = time.getHours();
let greeting = '';
let cssStyle ={ };
if(time >= 1 && time < 12) {
    greeting = "Good Morning";
    cssStyle.color ="green";
} else if(time >=12 && time <17) {
    greeting = "Good Afternoon";
    cssStyle.color ="orange";
} else {
    greeting = "Good Night";
    cssStyle.color ="black";
}
ReactDOM.render(
<>
<div className="greetings">
    <h1>Create Greeeting Wish Using React</h1>
    <h1> Hello sir, <span style={ cssStyle } > {  greeting } </span></h1>
</div>
</>, document.getElementById('challenge-three'));


// ReactDOM.render([
//     <h1>Hello</h1>,
//     <p>this is paragraph tag</p>,
//     ],
//     document.getElementById('root')
//     ); //single render jsx


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


