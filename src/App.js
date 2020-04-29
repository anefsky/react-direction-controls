import React, {Component} from 'react';
import './App.scss';
import StatusDisplay from './components/StatusDisplay';
import ButtonSet from './components/ButtonSet';
import Utils from './utils/Utils';


class App extends Component {
  buttonChoices = [
    {
        dir: 'up'
    },
    {
        dir: 'left'
    },
    {
        dir: 'down'
    },
    {
        dir: 'right'
    }
  ];

  constructor() {
    super();
    this.state = {
      buttonChoices: this.buttonChoices,
      direction: Utils.getRandomItemFromArray(this.buttonChoices).dir
    };
  }

  directionClick = (direction) =>  {
    this.setState({
      direction: direction
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-body">
          <StatusDisplay
            direction = {this.state.direction}
          ></StatusDisplay>
          <ButtonSet
            buttonClick = {(direction) => this.directionClick(direction)}
            buttonChoices={this.state.buttonChoices}
          ></ButtonSet>
        </header>
      </div>
    );
  }
}

export default App;
