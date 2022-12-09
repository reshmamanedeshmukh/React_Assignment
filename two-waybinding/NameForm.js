import React, { Component,useState } from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>{this.state.value}</div>
        </div>
      );
    }
  }

  export default NameForm;