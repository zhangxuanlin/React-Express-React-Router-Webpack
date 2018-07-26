import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class VideoMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 1,
        };
    }
    handleChange = (i) => {
        const { getID } = this.props;
        this.setState({
            isActive: i,
        });
        getID(i);
    }
    render() {
        const { isActive } = this.state;
        const { data } = this.props;
        const list = data.map((v) => (
            <li key={v.id} className={v.id === isActive ? 'active VideoMenu-item' : 'VideoMenu-item'} onClick={() => { this.handleChange(v.id); }}>{v.name}</li>
        ));
        return (
            <div className="VideoMenu">
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
export default VideoMenu;
VideoMenu.propTypes = {
    data: PropTypes.array,
    getID: PropTypes.func,
};
