import React from 'react';
import { ms2Time } from '../_utils';



class MajorClock extends React.Component {
    static defaultProps = {
        value: 0
    }
    render() {
        const { value } = this.props;
        return (
            <div>{ms2Time(value)}</div>
        )
    }
}

export default MajorClock;