
import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly

const heading = React.createElement(
"h1",
{
id: "Title"
},
"lets practise react using parcel"
);
const heading2 = React.createElement(
    "h1",
    {
    id: "Title"
    },
    "Parcel is a Beast!!!!"
    );

const root = document.getElementById("root"); // Get the root element directly
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
    React.createElement("div", null, heading, heading2)
);


