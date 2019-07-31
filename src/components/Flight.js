import React, {Component} from 'react';



class Flight extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.flightData.Departure_data}</td>
                <td>{this.props.flightData.Arrival_data}</td>
                <td>{this.props.flightData.price}</td>

            </tr>

        );
    }
}


export default Flight;