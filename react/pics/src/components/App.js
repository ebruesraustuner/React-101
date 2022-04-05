import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class Main extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        console.log("🚀 ~ file: App.js ~ response", this)
        this.setState({ images: response.data.results })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}



export default Main