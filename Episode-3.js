import React from 'react';
import ReactDOM from 'react-dom/client';

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

const root = ReactDOM.createRoot(document.getElementById('episode3'));
root.render(<HeaderComponent/>);
