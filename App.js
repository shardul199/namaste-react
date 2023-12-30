const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child1"}, 
[
    React.createElement("h1", {}, "Hi, I'm h1"),
    React.createElement("h2", {}, "Hi I'm h2")
]), React.createElement("div", {id:"child1"}, 
[
    React.createElement("h1", {}, "Hi, I'm h1"),
    React.createElement("h2", {}, "Hi I'm h2")
])])

const heading = React.createElement("h1", 
{id : "heading"}, 
"Hello World");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);