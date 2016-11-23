import React from 'react';
import datas from '../text/case.json';

class Case extends React.Component {
  render() {
    const data = datas[Number(this.props.case)];
    return (
      <div id="article">
        <div id="name">
          <span >姓名</span>
          <span id="name-content">{data.name}</span>
        </div>
        <div id="occupation">
          <span>職業</span>
          <span id="occupation-content">{data.occupation}</span>
        </div>
        <span id="content">
          {data.content}
        </span>
        <div id="choice">
          <div id="execute">處決</div>
          <div id="spare">釋放</div>
        </div>
      </div>
    );
  }
}
Case.defaultProps = {
  case: 0,
};
Case.propTypes = {
  case: React.PropTypes.number,
};

export default Case;
