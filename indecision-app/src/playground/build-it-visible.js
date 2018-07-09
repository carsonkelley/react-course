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

/*
let visibility = false;

const toggleButton = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButton}>{visibility ? "Hide Details" : "Show Details"}</button>
            {visibility && <p>These are some additional details that you can now see.</p>}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
};

render(); */

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>These are the details that we're talking about</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));