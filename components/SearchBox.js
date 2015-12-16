// SearchBox Component, does not run until you call it
export default SearchBox = React.createClass({

  // this runs first
  getInitialState:function(){
    return {
      searchingFor: ''
    };
  },

  render: function() {
    return (
      <div className='searchbox' >
        // input box
        <input onChange={this.whenUserTypes} type='text'
        placeholder='Just Search Lah...'/>

        // This will appear upon typing "Searching For ..."
        {this.getSearchingForDom()}
      </div>
    );

  },

  getSearchingForDom: function() {
    // set this.state in the next function
    const {searchingFor} = this.state;
    if (searchingFor) {
        return <div>Searching for ... {searchingFor}</div>;
    }
    return null;
  },

  whenUserTypes: function (e) {
    const query = e.target.value;

    // set the state
    this.setState({
      searchingFor: query
    });
  }
});
