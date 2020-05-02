import React, { Component } from "react";
import Modal from "../modal/Modal";
import cross from "../../cross.svg";
import "./Home.css";
import ModalHeader from "../modal/ModalHeader";
import ModalTitle from "../modal/ModalTitle";
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
            <ModalHeader className="modal-header">
              <ModalTitle>
                <h1>A Custom Modal!</h1>
              </ModalTitle>
              <a href="" onClick={Modal.close("custom-modal-1")}>
                <img src={cross} alt="Cross Icon" />
              </a>
            </ModalHeader>
            <p>
              Context is designed to share data that can be considered “global”
              for a tree of React components, such as the current authenticated
              user, theme, or preferred language. For example, in the code below
              we manually thread through a “theme” prop in order to style the
              Button component:
            </p>
            <button
              onClick={Modal.close("custom-modal-1")}
              className="btn btn-default"
            >
              Submit
            </button>
          </Modal>
        </div>
      </>
    );
  }
}
export default Home;
