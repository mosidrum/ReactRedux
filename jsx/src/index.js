//Import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function labelText() {
    return 'What is your FirstName:';
}

//creating components
const App = () => {
    const buttonText = 'Click Me!';
    return (
        <div>
            <label htmlFor="name" className="label" style={{ paddingRight: '10px' }}>{labelText()}</label>
            <input id='name' type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', marginLeft: '10px' }}>{buttonText}</button>
        </div>
    );
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
