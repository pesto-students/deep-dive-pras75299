import React, { Component } from "react";
import Modal from "../modal/Modal";
import cross from "../../cross.svg";
import "./Home.css";
import ModalHeader from "../modal/ModalHeader";
import ModalTitle from "../modal/ModalTitle";
import ModalBody from "../modal/ModalBody";
import ModalFooter from "../modal/ModalFooter";
import Login from "../login/Login";
import Signup from "../signup/Signup";
class Home extends Component {
  render() {
    return (
      <>
        <div className="homeMain">
          <h1>Home</h1>
          <button onClick={Modal.open("login")} className="btn btn-primary">
            Login Modal
          </button>
          <button onClick={Modal.open("signup")} className="btn btn-default">
            Signup Modal
          </button>
          <button onClick={Modal.open("content")} className="btn btn-default">
            Content Modal
          </button>

          <Modal id="login">
            <ModalHeader className="modal-header">
              <ModalTitle>
                <h1>Login Modal!</h1>
              </ModalTitle>
              <a href="" onClick={Modal.close("login")}>
                <img src={cross} alt="Cross Icon" />
              </a>
            </ModalHeader>
            <ModalBody>
              <p>
                Context is designed to share data that can be considered
                “global” for a tree of React components, such as the current
                authenticated user, theme, or preferred language. For example,
                in the code below we manually thread through a “theme” prop in
                order to style the Button component:
              </p>
              <Login />
            </ModalBody>
            <ModalFooter>
              <button
                onClick={Modal.close("login")}
                className="btn btn-default"
              >
                Submit
              </button>
            </ModalFooter>
          </Modal>

          <Modal id="signup">
            <ModalHeader className="modal-header">
              <ModalTitle>
                <h1>Signup Modal!</h1>
              </ModalTitle>
              <a href="" onClick={Modal.close("signup")}>
                <img src={cross} alt="Cross Icon" />
              </a>
            </ModalHeader>
            <ModalBody>
              <Signup />
            </ModalBody>
            <ModalFooter>
              <button
                onClick={Modal.close("signup")}
                className="btn btn-default"
              >
                Submit
              </button>
            </ModalFooter>
          </Modal>

          <Modal id="content">
            <ModalHeader className="modal-header">
              <ModalTitle>
                <h1>content Modal!</h1>
              </ModalTitle>
              <a href="" onClick={Modal.close("content")}>
                <img src={cross} alt="Cross Icon" />
              </a>
            </ModalHeader>
            <ModalBody>
              <p>
                Context is designed to share data that can be considered
                “global” for a tree of React components, such as the current
                authenticated user, theme, or preferred language. For example,
                in the code below we manually thread through a “theme” prop in
                order to style the Button component:
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={Modal.close("content")}
                className="btn btn-default"
              >
                Submit
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
export default Home;
