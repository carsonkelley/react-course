"use strict";

var app = {
    title: "Visibility Toggle",
    show: false,
    buttonText: "Show"
};

var onButtonChange = function onButtonChange() {
    if (app.show) {
        app.show = false;
        app.buttonText = "Show";
    } else {
        app.show = true;
        app.buttonText = "Hide";
    }
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onButtonChange },
            app.buttonText,
            " Details"
        ),
        app.show && React.createElement(
            "p",
            null,
            "These are the best details anyone has ever seen."
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
