import React, { Component } from "react";
import Modal from "../modal/Modal";
import cross from "../../cross.svg";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="homeMain">
          <h1>Home</h1>
          <button
            onClick={Modal.open("custom-modal-1")}
            className="btn btn-primary"
          >
            Open Modal 1
          </button>

          <Modal id="custom-modal-1">
            <div className="modal-header">
              <a href="" onClick={Modal.close("custom-modal-1")}>
                <img src={cross} alt="Cross Icon" />
              </a>
            </div>
            <h1>A Custom Modal!</h1>
            <p>Text</p>
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
