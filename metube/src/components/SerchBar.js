import './Allcss.css';
import React from 'react';

class SearchBar extends React.Component {

    state = {inputText: ''};

    onInputChange = (event) =>{
        this.setState({inputText: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefult();

       this.props.onFormSubmit(this.state.inputText);
    };

    render () {
      return(
        <div className='search-bar ui segment' onSubmit={this.onFormSubmit}>
           <div className='ui form'>
            <div className='field'>
            <label className='search'>Search Videos</label>
                    <input type="text" value={this.state.inputText} placeholder="Search..." onChange={this.onInputChange} />
            </div>
           </div>
        </div>
      );
    }
}

export default SearchBar;