const parent = React.createElement("div",{id:"parent"},[
                 React.createElement("div",{id:"child1"},[
                  React.createElement("h1",{},"I am a h1 tag"),
                  React.createElement("h2",{},"I am a h2 tag"),
                  React.createElement("h3",{},"I am a h3 tag")
                 ]),
                  React.createElement("div",{id:"child2"},[
                    React.createElement("h1",{},"I am a h1 tag"),
                    React.createElement("h2",{},"I am a h2 tag"),
                    React.createElement("h3",{},"I am a h3 tag")
                  ]),
                  React.createElement("div",{id:"child3"},[
                    React.createElement("h1",{},"I am a h1 tag"),
                    React.createElement("h2",{},"I am a h2 tag"),
                    React.createElement("h3",{},"I am a h3 tag")
                  ])
              ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);