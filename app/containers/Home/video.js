import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SubVideo = (props) => <div className="SubVideo"><h1>{props.v.id}</h1></div>;

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
        };
    }
    render() {
        const { i } = this.state;
        const { data, transY } = this.props;
        console.log(i);
        const videoList = data.map((v) => (
            <SubVideo key={v.id} v={v} />
        ));
        return (
            <div className="flex1 hidden">
                <div
                    className="SubVideoBox"
                    style={{ transform: `translateY(${transY}px)` }}
                >
                    {videoList}
                </div>
            </div>
        );
    }
}
export default Video;
Video.propTypes = {
    data: PropTypes.array,
    transY: PropTypes.number,
};
SubVideo.propTypes = {
    v: PropTypes.object,
};

