import React from 'react';

class ControlButtons extends React.Component {
  render() {
    const { activeted, onStart, onReset, onPause, onSplit } = this.props;
    if (activeted) {
      return (
        <div>
          <div onClick={onSplit}>计次</div>
          <div onClick={onPause}>停止</div>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={onReset}>复位</div>
          <div onClick={onStart}>启动</div>
        </div>
      )
    }
  }
}

export default ControlButtons;