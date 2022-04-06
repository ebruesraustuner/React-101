import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Buttons from "./Buttons";

class Main extends React.Component {
    state = {
        images: [],
        searchText: '',
        page: 1,
        totalPages: 0,
        buttons: []
    }

    onSearchSubmit = async (term) => {
        await this.setState({ ...this.state, searchText: term })
        console.log(this.state)
        await this.onSearch()
        this.start();
    }

    onSearch = async () => {
        console.log('searchçalıştı')
  
        const response = await unsplash.get('/search/photos', {
            params: {
                query: this.state.searchText,
                page: this.state.page,
                per_page: 20,
            }
        });
        
        await this.setState(() => {
            return {
             page:2,   images: response.data.results, totalPages: response.data.total_pages
            }
        })
        // await this.setState({ images: response.data.results, totalPages: response.data.total_pages })
        console.log("🚀 ~ file: App.js ~ response stateikler", this.state)

    }

    onPaging = async (value) => {
        console.log('btn çalıştı')
        await this.setState({ ...this.state, page: value })
        this.onSearch()

    }
    start() {

        let tempArray = []

        for (let index = 0; index < this.state.totalPages; index++) {

            tempArray.push(<button>Test</button>);

        }

        this.setState({ buttons: tempArray })
        console.log(this.state)
    }

    render() {


        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                <Buttons totalPages={this.state.totalPages} searchWtihPage={this.onPaging} />
                {/* {this.state.buttons}

                {this.state.images.length > 0 && (<div className="test">
                    pages var
                </div>)} */}

            </div>
        );
    }
}



export default Main