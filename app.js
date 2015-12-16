import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './components/SearchBox'
// SearchBox Component, does not run until you call it
export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchingFor: ''
    }
  }

  render () {
    return (
      <div className='appWrapper'>
        <h2>Grocery Initial Scroll</h2>
        <SearchBox whenUserTypes={::this.whenUserTypes} />
        {this.getSearchingForDom()}
      </div>
    )
  }
  whenUserTypes (e) {
    const query = e.target.value;

    this.setState({
      searchingFor: query
    })
  }
  getSearchingForDom () {
    const {searchingFor} = this.state;
    if (searchingFor) {
        return <div>Searching for ... {searchingFor}</div>;
    }
    return null;
  }

}
// Mounting App
ReactDOM.render(
  <App/>, document.querySelector('#app')
)
