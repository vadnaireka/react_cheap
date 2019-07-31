import React, {Component} from 'react';
import  './SearchingForm.css';
import axios from 'axios';
import DatePicker from 'react-pikaday-datepicker';



class SearchingForm extends Component {

    state ={
        from:'',
        to:'',
        from_date:''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) =>{
        e.preventDefault();

        axios.get(`http://localhost:8080/getfromtoprice/${this.state.from}/${this.state.to}/${this.state.from_date}/`, this.state)
            .then(res => {
                    console.log(res.data)
                this.props.sendDataToParent(res.data)
                }
            )
            };

    handleChange = (date) => {
        this.setState({startDate: date})};


    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input className="input" type="text"  name="from" placeholder="From" value={this.state.from} onChange={this.onChange}/>
                <input className="input" type="text"  name="to" placeholder="To" value={this.state.to} onChange={this.onChange}/>
                <input className="input" type="text"  name="from_date"  placeholder="Departure date" value={this.state.from_date} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn"/>
            </form>
        )
    }
}

export default SearchingForm;
