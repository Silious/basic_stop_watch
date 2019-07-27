import React from 'react';
import MajorClock from '../MajorClock';
import ControlButtons from '../ControlButtons';
import SplitTimes from '../SplitTimes';

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: false,
            startTime: new Date(),
            currentTime: new Date(),
            splitTime: [],
        }
    }
    render() {
        const { startTime, currentTime, isStart, splitTime } = this.state;
        const ms = currentTime - startTime;
        return (
            <div className="stopWatch">
                <MajorClock value={ms} />
                <ControlButtons
                    activeted={isStart}
                    onSplit={this.onSplit}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onReset={this.onReset}
                />
                <SplitTimes value={splitTime} />
            </div>
        )
    }

    onStart = () => {
        this.setState({ isStart: true });
        this.intervalHandle = setInterval(() => {
            this.setState({ currentTime: new Date() })
        }, 1000 / 60);
    }

    onPause = () => {
        clearInterval(this.intervalHandle);
        this.setState({ isStart: false });
    }

    onReset = () => {
        clearInterval(this.intervalHandle);
        this.setState({ isStart: false, startTime: new Date(), currentTime: new Date() });
    }

    onSplit = () => {
        clearInterval(this.intervalHandle);
        const { splitTime, startTime, currentTime } = this.state;
        this.setState({ isStart: false, splitTime: [...splitTime, currentTime - startTime], startTime: new Date(), currentTime: new Date() });
    }

}

export default StopWatch;
