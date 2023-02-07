import React, { Component } from 'react'

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
           window.gapi.client.init({
            clientID: '147866450501-kd4gv0cbatakv4jsodl85mk62v7u23s7.apps.googleusercontent.com',
            scope: 'email'
           });
        });
    }
  render() {
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth;
