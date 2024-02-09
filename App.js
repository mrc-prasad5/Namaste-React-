import React from "react";
import ReactDOM   from "react-dom/client";

let num = 1000;

//React core syntax for creating react element
const heading = React.createElement("h1",{id:"heading"},"Welcome to React from core react");

//React Element using JSX
const sample = <div>Sample react element to show inside another react element</div>


//Functional component to create react element using normal functions.
const Title =  function ()  {
                    return <div id="heading" className="root" tabIndex="1">
                                Welcome to React Functional Child Component.
                            </div>;  
                }

//Including an element and a component inside a js variable                
const element = <div>
                  {sample} 
                  {Title()} 
                  Including react element inside a functional component
                </div>;



// Functional component using arrow function.
const HeadingComponent = () => {
                            return <div id="heading" className="root" tabIndex="1">
                                        Welcome to React Functional Parent Component.
                                        {console.log('console works inside functional component')}
                                        {element}
                                        <Title/>
                                        <h2>{num}</h2>
                                    </div>; 
                        }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);