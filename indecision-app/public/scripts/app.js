"use strict";

/*
const app = {
    title: "Visibility Toggle",
    show: false,
    buttonText: "Show"
};

const onButtonChange = () => {
    if(app.show) {
        app.show = false;
        app.buttonText = "Show";
    } else {
        app.show = true;
        app.buttonText = "Hide";
    }
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onButtonChange}>{app.buttonText} Details</button>
            {app.show && <p>These are the best details anyone has ever seen.</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render(); */
var visibility = false;

var toggleButton = function toggleButton() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleButton },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "These are some additional details that you can now see."
        )
    );
    ReactDOM.render(jsx, document.getElementById("app"));
};

render();
