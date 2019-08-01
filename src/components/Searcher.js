import React, {Component} from 'react';
import  './Searcher.css';


class Searcher extends Component {
    render() {
        return (

            <table className='table'>
                <thead className='header'>
                    <th className='headerCell' >Company</th>
                    <th className='headerCell' >Flight Number</th>
                    <th className='headerCell' >Departure time</th>
                    <th className='headerCell'>Arrival time</th>
                    <th className='headerCell'>Price</th>
                </thead>
                <tbody>
                {this.props.datas.map((data) => (
                    <tr className='bodyRow'>
                        <td className='dataCell'>{data.carrier}</td>
                        <td className='dataCell'>{data.flightnumber}</td>
                        <td className='dataCell'>{data.departure_time}</td>
                        <td className='dataCell'>{data.arrival_time}</td>
                        <td className='dataCell'>{data.price} EUR</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default Searcher;
