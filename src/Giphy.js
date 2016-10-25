import React, {Component, PropTypes} from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';

class Giphy extends Component {

    constructor(props) {
        super(props);
        this.state = {searchString: '', searchResult: []};
    }

    _handleInput = (event) => {
        this.setState({searchString: event.target.value});
    };

    _search = () => {

        fetch('http://api.giphy.com/v1/gifs/search?api_key=' + this.props.apiKey +
            '&q=' + encodeURIComponent(this.state.searchString) + '&limit=' + this.props.maxResults)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(response) {
                console.log(response);
                this.setState({searchResult: response.data});
            }.bind(this));

    };

    _handleEsc = (event) => {
        if (event.keyCode === 27) {
            this.setState({searchResult: []});
        }
    };

    componentWillMount() {
        document.addEventListener('keydown', this._handleEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleEsc);
    }


    render() {
        return (
            <div className='giphy-search'>
                Giphy searcher
                <input type='text'
                       className='giphy-search-input'
                       value={this.state.searchString}
                       onChange={this._handleInput}
                />
                <button onClick={this._search}>Search on Giphy</button>

                <div className='giphy-search-result'>
                    <div>{this.state.searchResult.length} Results found</div>

                    {this.state.searchResult.map((gif, idx) => {
                        return (
                            <div key={idx}>
                                <img src={gif.images.downsized.url} role='presentation'/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Giphy.propTypes = {
    maxResults: PropTypes.number.isRequired,
    apiKey: PropTypes.string.isRequired
}

export default Giphy;
