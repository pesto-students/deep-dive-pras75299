import React, { Component } from "react";
import Modal from "../modal/Modal";
import cross from "../../cross.svg";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyText: "This text can be updated in modal 1",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { bodyText } = this.state;
    return (
      <>
        <div className="homeMain">
          <h1>Home</h1>
          <p>{bodyText}</p>
          <button
            onClick={Modal.open("custom-modal-1")}
            className="btn btn-primary"
          >
            Open Modal 1
          </button>

          <Modal id="custom-modal-1">
            <div className="modal-header">
              <a onClick={Modal.close("custom-modal-1")}>
                <img src={cross} />
              </a>
            </div>
            <h1>A Custom Modal!</h1>
            <p>
              Home page text:{" "}
              <input
                type="text"
                name="bodyText"
                value={bodyText}
                onChange={this.handleChange}
              />
            </p>
            <button
              onClick={Modal.close("custom-modal-1")}
              className="btn btn-default"
            >
              Close
            </button>
          </Modal>
        </div>
      </>
    );
  }
}
export default Home;
