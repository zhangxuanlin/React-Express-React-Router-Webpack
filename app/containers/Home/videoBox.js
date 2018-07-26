import React from 'react';
import VideoMenu from './videoMenu';
import Video from './video';
import './style.css';

class VideoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            transY: 0,
            data: [{
                id: 1,
                name: '东部线1号水泵',
                source: 'https://xs.com?id=1',
            }, {
                id: 2,
                name: '北西线2号水泵',
                source: 'https://xs.com?id=1',
            }, {
                id: 3,
                name: '智格线1号水泵',
                source: 'https://xs.com?id=1',
            }, {
                id: 4,
                name: '高教线1号水泵',
                source: 'https://xs.com?id=1',
            }],
        };
    }
    componentDidMount() {
    }
    /*
     * 获取menu点击id
     */
    getID = (i) => {
        this.setState((prevState) => ({
            id: i,
            transY: prevState.transY + ((i - prevState.id) * (-400)), // （本次id - 上次id）* 固定高度  + 上次偏移量
        }));
    }
    render() {
        const { data, transY } = this.state;
        return (
            <div className="videobox">
                <VideoMenu
                    data={data}
                    getID={this.getID}
                />
                <Video
                    data={data}
                    transY={transY}
                />
            </div>
        );
    }
}
export default VideoBox;
