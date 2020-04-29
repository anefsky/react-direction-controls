import React, {Component} from 'react';

class ButtonSet extends Component {

    render() {
        let buttonOutput = this.props.buttonChoices.map( (button) => 
            <div 
                className={'direction-button ' + button.dir}
                onClick={() => this.props.buttonClick(button.dir)}
                key={button.dir}
            ></div>
        )


        return (
            <div className="buttons-container">
                {buttonOutput}
            </div>
        );
    }
}

export default ButtonSet;