import React, {Component} from 'react';
import './AutoComplete.css';

class AutoComplete extends Component{

    constructor(props){
        super(props);
        this.items=[
            'London',
            "Paris",
            "Budapest",
            "BUD",
            "AMS",
            "Amsterdam",
            "Prague",
            "Pula"
        ];
        this.state={
            suggestions: [],
            text : ""

        }
    }


    onTextChange = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        let suggestions = [];
        console.log("value.lenght"+value.length);
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, "i");
            suggestions = this.items.sort().filter(v => regex.test(v));
        }

        //frissítem a state-ben a text valuet.
        this.setState(() => ({ suggestions, text: value}));
        //mégsem látja a friss valut, csak az eggyel előbbit.
        console.log(this.state.text);
        this.props.sendDataToParent(this.props.name, this.state.text);
    };

    suggestionSelected (value){
        this.setState(() => ({
            text : value,
            suggestions: [],
        }))
    }

    renderSuggestion(){
        const  {suggestions } = this.state;
        if ( suggestions.length === 0){
            return null;
        }
        return (
        <ul>
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
        )
        }


    render(){
        return(
            <div className="AutoComplete">
                <input value={this.state.text} onChange={this.onTextChange} type="text" placeholder={this.props.placeholder}/>
                {this.renderSuggestion()}
            </div>
        )
    }

}

export default AutoComplete;