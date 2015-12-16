import React, { Component } from 'react'
// SearchBox Component, does not run until you call it
export default class SearchBox extends Component {

  render () {
    return (
      <div className='searchbox' >
        <input onChange={::this.props.whenUserTypes} type='text'
        placeholder='Just Search Lah...'/>
      </div>
    )
  }
}
