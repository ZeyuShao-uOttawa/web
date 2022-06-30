import { Modal, Button } from 'react-bootstrap';

function modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.object[0]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Specs</h4>
        {Array.from({ length: props.specs.length }).map((_, index) => (
          <p key={index}>{props.specs[index]}: {props.object[index]}</p>
        ))}
        <h4>Reviews</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default modal;