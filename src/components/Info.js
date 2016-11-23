import React from 'react';
import data from '../text/info.json';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 5,
    };
  }
  render() {
    console.log('data!');
    return (<div id="article">{data.str}</div>);
  }
}

Info.defaultProps = {
  text: 0,
  go: () => console.log('FUCKED UP!'),
};
Info.propTypes = {
  text: React.PropTypes.number,
  go: React.PropTypes.func,
};

export default Info;
