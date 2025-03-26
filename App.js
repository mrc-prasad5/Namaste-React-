//Traditonal React Approach

const parent = React.createElement(
  'div',
  {id:'parent'},
  React.createElement(
    'div',
    {id:'child'},
    [
      React.createElement('h1',{id:'h1'},'I am h1 tag!...'),
      React.createElement('h2',{id:'h2'},'I am h2 tag!....'),
      React.createElement('h3',{id:'h3'},'I am h3 tag!...'),
      React.createElement('h4',{id:'h4'},'I am h4 tag!...'),
      React.createElement('h5',{id:'h5'},'I am h5 tag!...'),
      React.createElement('h6',{id:'h6'},'I am h6 tag!...')
    ])
)

const root = ReactDOM.createRoot(document.getElementById('root'));
setTimeout(() => {
  root.render(parent);  
}, 10000);
