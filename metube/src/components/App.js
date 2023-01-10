import React from 'react';
import SearchBar from './SerchBar';

class App extends React.Component {

    onInputTextSubmit = (inputText) => {
        console.log(inputText);

    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onInputTextSubmit} />
            </div>
        );
    }
}

export default App;