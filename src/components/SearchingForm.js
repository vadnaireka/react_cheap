import React, {Component} from 'react';
import  './SearchingForm.css';
import axios from 'axios';
import DatePicker from 'react-pikaday-datepicker';
import AutoComplete from "./AutoComplete";



class SearchingForm extends Component {

    items=[
        "London",
        "Paris",
        "Budapest",
        "BUD",
        "AMS",
        "Amsterdam",
        "Prague",
        "Pula"
    ];

    state ={
        from:'',
        to:'',
        from_date:'',
        suggestions: []
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) =>{
        e.preventDefault();

        axios.get(`http://localhost:8080/getfromtoprice/${this.state.from}/${this.state.to}/${this.state.from_date}/`, this.state)
            .then(res => {
                    console.log(res.data);
                this.props.sendDataToParent(res.data)
                })
            };


    uploadSearchState = (stateKey, value) => this.setState({[stateKey]: value});


    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <div className="container">
                {/*<AutoComplete name="from" value="from" placeholder="From" sendDataToParent={this.uploadSearchState}/>*/}
                {/*<AutoComplete name="to" value="to" placeholder="To" sendDataToParent={this.uploadSearchState}/>*/}
                <input className="input" type="text"  name="from" placeholder="From" value={this.state.from} onChange={this.onChange}/>
                <input className="input" type="text"  name="to" placeholder="To" value={this.state.to} onChange={this.onChange}/>
                <input className="input" type="text"  name="from_date"  placeholder="Departure date: YYYY-MM-DD" value={this.state.from_date} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn"/>
                </div>
            </form>
        )
    }
}

export default SearchingForm;
