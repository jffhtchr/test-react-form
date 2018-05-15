import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    const name = this._name.value;
    alert(name)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" ref={input => this._name = input}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default App;
