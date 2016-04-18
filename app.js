import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './components/SearchBox'
import ProductResult from './components/ProductResult'
// SearchBox Component, does not run until you call it
export default class App extends Component {

  constructor (props) {
    // The super keyword is used to call functions on an object's parent.
    super(props)
    this.state = {
      searchingFor: '',
      searchResult:[],
    }
  }

  render () {
    return (
      <div className='appWrapper'>
        <h2>Grocery Initial Scroll</h2>
        <SearchBox whenUserTypes={::this.whenUserTypes} />
        {this.getSearchingForDom()}
        <ProductResult productResult={this.state.searchResult} />
      </div>
    )
  }
  // Because this frequently changes when you change the scope
  // by calling a new function,
  // you can't access the original value by using it.
  // Aliasing it to that allows you still to access the original value of this.
  whenUserTypes (e) {
    const query = e.target.value;
    // initial state
    var that = this

    this.setState({
      searchingFor: query
    })

    fetch('https://api.redmart.com/v1.5.6/catalog/search?q=' + query
      + '&pageSize=1&sort=1')
      .then(function(response){
        return response.json()
      }).then(function(data){
        that.setState({
          // if there is match set it empty string
          searchingFor: '',
          searchResult: data.products
        })
      })
  }
  // as you type text appears below
  getSearchingForDom () {
    const {searchingFor} = this.state;
    if (searchingFor) {
        return <div>Searching for ... {searchingFor}</div>;
    }
    return null;
  }

}
// End of Class

// Mounting App
ReactDOM.render(
  <App/>, document.querySelector('#app')
)
