import React, { Component } from 'react';
import './AlphaButtons.css';

class AlphaButtons extends Component {
    render() {
        return (
            <p className="AlphaButtons">{ this.props.generateButtons() }</p>
        )
    }
}

export default AlphaButtons;