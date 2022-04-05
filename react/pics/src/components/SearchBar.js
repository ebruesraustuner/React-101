import React from "react";

class SearchBar extends React.Component {

    state =  {term: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.term)
        this.props.onSubmit(this.state.term)
        console.log("🚀 ~ file: SearchBar.js ~ line 11 ~ SearchBar ~ this.props", this.props)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}> 
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term : e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar