import React from 'react';

export default class Contact extends React.Component {
    render(){
        return (
            <tbody>
                {this.props.contacts.map((item) => {
                    return (
                        <tr>
                            <td>{item.Senator}</td>
                            <td>{item.First}</td>
                            <td>{item.Last}</td>
                            <td>{item.Office}</td>
                            <td>{item.Cell}</td>
                            <td>{item.Email}</td>
                            <td>{item.Title}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
}