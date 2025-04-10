import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

//Traditonal React Approach

//React Element => Creates an Object => when renders on DOM becomes like HTML Element
// const parent = React.createElement(
//   'div',
//   {id:'parent'},
//   React.createElement(
//     'div',
//     {id:'child'},
//     [
//       React.createElement('h1',{id:'h1'},'I am h1 tag!...'),
//       React.createElement('h2',{id:'h2'},'I am h2 tag!....'),
//       React.createElement('h3',{id:'h3'},'I am h3 tag!...'),
//       React.createElement('h4',{id:'h4'},'I am h4 tag!...'),
//       React.createElement('h5',{id:'h5'},'I am h5 tag!...'),
//       React.createElement('h6',{id:'h6'},'I am h6 tag!...')
//     ])
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setTimeout(() => {
//   root.render(parent);  
// }, 10000);

//JSX is not HTML in JS. Its HTML like syntax
const jsxHeader = (<h1 id="parent" tabIndex="1">Welcome to JSX</h1>);

//Eg:Use a react element inside an element
const element = <span>Normal React Component</span>
const title = (
  <h1 className='header'>
    {element}<br/><br/>
    Namaste React using JSX
  </h1>
)

//Functional Component is nothing but a js function returns piece of JSX code or a react element

//Eg: functional component using traditional js function.
const TitleComponent = function() {
  return <h1 className='header'>Welcome to React JSX</h1>
} 

//Eg: functional component using arrow function.
const TitleComponent1 = () => {
  return <h1 className='header'>Welcome to React Functional Component</h1>
}

//Component Composition is nothing but composing two component in an element or component inside another component.
const HeaderComponent = () => (
  <div>
    {title}
    {TitleComponent1()}
    <TitleComponent/>
    <TitleComponent></TitleComponent>
    <h1 className='header'>Welcome to React Functional Component</h1>
  </div>
)

//Bind a normal js variable in a functional component
let number = 1000;
const HeaderComponent1 = () => (
  <div>
    <h2>{number}</h2>
    <h1 className='header'>Welcome to React Functional Component</h1>
  </div>
)


//Eg: Use a react element inside a functional component
const component = <h1>Normal React Component</h1>
const HeaderComponent2 = () => (
  <div>
    {component}
    <h1 className='header'>Welcome to React Functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);
