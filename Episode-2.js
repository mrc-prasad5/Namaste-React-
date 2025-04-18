import React from 'react';
import ReactDOM from 'react-dom/client';

//Traditonal React Approach

//React Element => Creates an Object => when renders on DOM becomes like HTML Element
const parent = React.createElement(
  'div',
  {id:'parent'},
  React.createElement(
    'div',
    {id:'child'},
    [
      React.createElement('h1',{key:'h1',id:'h1'},'I am h1 tag!...'),
      React.createElement('h2',{key:'h2',id:'h2'},'I am h2 tag!....'),
      React.createElement('h3',{key:'h3',id:'h3'},'I am h3 tag!...'),
      React.createElement('h4',{key:'h4',id:'h4'},'I am h4 tag!...'),
      React.createElement('h5',{key:'h5',id:'h5'},'I am h5 tag!...'),
      React.createElement('h6',{key:'h6',id:'h6'},'I am h6 tag!...')
    ])
)
const root = ReactDOM.createRoot(document.getElementById('episode2'));
setTimeout(() => {
  root.render(parent);  
}, 10000);

