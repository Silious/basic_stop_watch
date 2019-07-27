import React from 'react';
import { ms2Time } from '../_utils';

class SplitTimes extends React.Component {
    render() {
        const { value = [] } = this.props;
        return (
            <div>{
                value.map((item, index) => (
                    <div key={index}>{ms2Time(item)}</div>
                ))
            }</div>
        )
    }
}

export default SplitTimes;