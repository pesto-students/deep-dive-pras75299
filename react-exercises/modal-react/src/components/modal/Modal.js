import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const propTypes = {
  id: PropTypes.string.isRequired,
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  static modals = [];

  static open = (id) => (e) => {
    e.preventDefault();
    let modal = Modal.modals.find((x) => x.props.id === id);
    modal.setState({ isOpen: true });
    document.body.classList.add("modal-open");
  };

  static close = (id) => (e) => {
    e.preventDefault();
    let modal = Modal.modals.find((x) => x.props.id === id);
    modal.setState({ isOpen: false });
    document.body.classList.remove("modal-open");
  };

  componentDidMount() {
    document.body.appendChild(this.element);
    document.addEventListener("keydown", this.onEscClick, false);
    Modal.modals.push(this);
  }

  componentWillUnmount() {
    Modal.modals = Modal.modals.filter((x) => x.props.id !== this.props.id);
    document.removeEventListener("keydown", this.onEscClick, false);
    this.element.remove();
  }

  handleClick = (e) => {
    if (e.target.className === "modal") {
      Modal.close(this.props.id)(e);
    }
  };

  onEscClick = (e) => {
    if (e.keyCode === 27) {
      Modal.close(this.props.id)(e);
    }
  };

  render() {
    return (
      <div
        style={{ display: +this.state.isOpen ? "" : "none" }}
        onClick={this.handleClick}
        ref={(el) => (this.element = el)}
      >
        <div className="modal">
          <div className="modal-body">{this.props.children}</div>
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}
Modal.propTypes = propTypes;
export default Modal;
