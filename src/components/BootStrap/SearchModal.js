import {useState} from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal } from 'react-bootstrap';
import {AiOutlineSearch} from 'react-icons/ai'

function Example(props) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <>
        <Button variant="dark" onClick={handleShow}>
         <AiOutlineSearch />
        </Button>


      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose} 
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
  ReactDOM.render(<Example />, document.getElementById('root'));

export default Example

