console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
};

//JSX - JavaScript XML

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Carson',
    age: 26,
    location: "Houston"
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anon"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);