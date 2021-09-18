import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { editContent } from '../../todoSlide.js';

function MyVerticallyCenteredModal(props) {
  const { info } = props;
  const [valueInput, setValueInPut] = useState();
  const [idItem, setIDItem] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    setValueInPut(info.content);
    setIDItem(info.id)
  }, [info])

  const handleOnChange = (e) => {
    setValueInPut(e);
  }

  const handleSubmit = () => {
    var editItem = {
      id : idItem,
      content : valueInput
    }
    const action = editContent(editItem);
    dispatch(action);
    return props.onHide(false)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Content
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12">
            <input type="text" value={valueInput} className="form-control" onChange={(e) => { handleOnChange(e.target.value) }} />
          </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success" onClick={() => { handleSubmit() }}>Submit</Button>
        <Button className="btn-danger" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;