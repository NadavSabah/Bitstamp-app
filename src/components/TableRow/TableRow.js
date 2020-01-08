import React from 'react';
import './TableRow.css'


class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userId}</td>
                <td>{this.props.title}</td>
            </tr>
        )
    }
}
export default TableRow