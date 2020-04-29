import React, {Component} from 'react';

class StatusDisplay extends Component {
    render() {
        return (
            <div className="status-display">
                <h2>{this.props.direction}</h2>
            </div>
        );
    }
}

export default StatusDisplay;