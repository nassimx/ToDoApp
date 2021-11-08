import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import './modalcomp.css';

function Modalcomp(props) {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="modal"
      >
        <Modal.Body className="modalbody">
          <h2 className="modal-title">Start a New List</h2>
          <span className="modaldisc">
            When you start a new list, your existing list will be deleted. Would
            you like to start a new list?
          </span>
          <div className="modal-btns">
            <Button
              className="btnmodal1"
              onClick={() => window.location.reload(false)}
            >
              Start New List
            </Button>
            <Button className="btnmodal2" onClick={props.onHide}>
              Keep Existing
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modalcomp;
