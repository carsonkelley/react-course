import React from 'react';


const PortfolioItemPage = (props) => (
    <div>
        <h1>A Thing I Made</h1>
        <p>This is showing off my page with an id of {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;