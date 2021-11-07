import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';

function Modalcomp(props) {
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Start a New List</h2>
          <span>
            When you start a new list, your existing list will be deleted. Would
            you like to start a new list?
          </span>
          <Button>Start New List</Button>
          <Button onClick={props.onHide}>Keep Existing</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modalcomp;
