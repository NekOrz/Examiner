import React from 'react';

import Case from './Case';
import Info from './Info';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 0, // 0: Intro
      caseNumber: 0, // The progress
      choices: [],
    };
    this.advanceCase = this.advanceCase.bind(this);
    this.addChoice = this.addChoice.bind(this);
    this.resetState = this.resetState.bind(this);
    this.gotoCase = this.gotoCase.bind(this);
    this.gotoInfo = this.gotoInfo.bind(this);
  }

  advanceCase() {
    this.setState({
      caseNumber: this.state.caseNumber + 1,
    });
  }

  addChoice(choice) {
    this.setState({
      choices: this.state.choices.push(choice),
    });
  }

  resetState() {
    this.setState({
      gameState: 0, // 0: Intro
      caseNumber: 0, // The progress
      choices: [],
    });
  }

  gotoCase() {
    this.setState({
      gameState: 1,
    });
  }

  gotoInfo() {
    this.setState({
      gameState: 0,
    });
  }

  render() {
    if (this.state.gameState === 0) {
      console.log('Innnn');
      return <Info go={this.gotoCase} text={this.state.caseNumber} />;
    }
    else if (this.state.gameState === 1) {
      return <Case case={this.state.caseNumber} />;
    }
    return <div> Wut? </div>;
  }
}

export default App;
