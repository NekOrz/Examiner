import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 5,
    };
  }
  render() {
    console.log('data!');
    return (<div id="article" onClick={this.props.go}>{this.props.text}</div>);
  }
}

Info.defaultProps = {
  text: 0,
  go: () => console.log('FUCKED UP!'),
};
Info.propTypes = {
  text: React.PropTypes.string,
  go: React.PropTypes.func,
};

export default Info;
