import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        let date = new Date(this.props.item.createdAt).toLocaleDateString();

        return (
            <div className="backdrop">
                <div className="modal">
                        <div className="picture">
                            <img src={this.props.item.svgSrc}/>
                        </div>
                        <div className="content">
                            <div className="id">id: {this.props.item._id}</div>
                            <div className="date">{date}</div>
                            <div className="text">{this.props.item.text}</div>
                        </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;

