import React, {Component} from 'react';
import Searcher from './components/Searcher';

import './App.css';
import SearchingForm from "./components/SearchingForm";
import axios from 'axios';


class App extends Component {

    state = {
        datas : []

    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => this.setState({datas: response.data}));
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Cheap Flight Searcher</h1>
                </header>

                <div className="searcher">
                    < SearchingForm/>
                    < Searcher datas={this.state.datas}/>
                </div>

            </div>
        );
    }
}


export default App;