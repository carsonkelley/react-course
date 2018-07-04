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

render();