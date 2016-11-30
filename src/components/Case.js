import React from 'react';
import datas from '../text/case.json';

function Case(props) {
  const data = datas[Number(props.case)];
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
        <button onClick={() => props.choose(0)} id="execute">處決</button>
        <button onClick={() => props.choose(1)} id="spare">釋放</button>
      </div>
    </div>
  );
}
Case.defaultProps = {
  case: 0,
  choose: () => console.log('NOOOOO!'),
};
Case.propTypes = {
  case: React.PropTypes.number,
  choose: React.PropTypes.func,
};

export default Case;
