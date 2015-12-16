import React, { Component } from 'react'
// SearchBox Component, does not run until you call it
export default class SearchBox extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchingFor: ''
    }
  }

  render () {
    return (
      <div className='searchbox' >
        // input box
        <input onChange={::this.whenUserTypes} type='text'
        placeholder='Just Search Lah...'/>

        // This will appear upon typing "Searching For ..."
        {this.getSearchingForDom()}
      </div>
    )

  }

  getSearchingForDom() {
    // set this.state in the next function
    const {searchingFor} = this.state;
    if (searchingFor) {
        return <div>Searching for ... {searchingFor}</div>;
    }
    return null;
  }

  whenUserTypes(e) {
    const query = e.target.value;

    // set the state
    this.setState({
      searchingFor: query
    });
  }
};
