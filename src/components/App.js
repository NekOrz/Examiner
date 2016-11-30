import React from 'react';
import cookie from 'common-js-cookie';

import Case from './Case';
import Info from './Info';
import data from '../text/info.json';

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
    this.goNext = this.goNext.bind(this);
    this.genMain = this.genMain.bind(this);
    this.save = this.save.bind(this);
    this.load = this.load.bind(this);
  }

  advanceCase() {
    this.setState({
      caseNumber: this.state.caseNumber + 1,
    });
  }

  addChoice(choice) {
    this.setState({
      choices: this.state.choices.concat(choice),
    });
    this.goNext();
  }

  resetState() {
    this.setState({
      gameState: 0, // 0: Intro, 1: Case, 2: Ending
      caseNumber: 0, // The progress
      choices: [],
    });
  }

  goNext() {
    if (this.state.gameState === 2) this.advanceCase();
    this.setState({
      gameState: (this.state.gameState + 1) % 3,
    });
  }

  genMain() {
    if (this.state.gameState === 0) {
      return <Info go={this.goNext} text={data[this.state.caseNumber].premise} />;
    }
    else if (this.state.gameState === 1) {
      return <Case choose={this.addChoice} case={this.state.caseNumber} />;
    }
    else if (this.state.gameState === 2) {
      const endings = data[this.state.caseNumber].ending;
      const str = endings[this.state.choices[this.state.choices.length - 1]];
      return <Info go={this.goNext} text={str} />;
    }
    return <div> Wut? </div>;
  }

  save() {
    cookie.setItem('all', JSON.stringify(this.state));
  }

  load() {
    const obj = cookie.getItem('all');
    this.setState(JSON.parse(obj));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 mid">Examiner</div>
        <div className="col-md-2 dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Option
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.save()}>Save</li>
            <li onClick={() => this.load()}>Load</li>
            <li onClick={() => this.resetState()}>Reset</li>
          </ul>
        </div>
        {this.genMain()}
      </div>
    );
  }
}

export default App;
