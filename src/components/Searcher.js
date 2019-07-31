import React, {Component} from 'react';
import  './Searcher.css';


class Searcher extends Component {
    render() {
        return (

            <table className='table'>
                <thead className='header'>
                    <th className='headerCell' >Departure time</th>
                    <th className='headerCell'>Arrival time</th>
                    <th className='headerCell'>Price</th>
                </thead>
                <tbody>
                {this.props.datas.map((data) => (
                    <tr className='bodyRow'>
                        <td className='dataCell'>{data.title}</td>
                        <td className='dataCell'>{data.arrival_data}</td>
                        <td className='dataCell'>{data.price} USD</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}

export default Searcher;
