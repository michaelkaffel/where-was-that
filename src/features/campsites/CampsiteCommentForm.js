import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Formik, Field, Form as FForm, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCampComment } from './campsitesCommentsSlice';
import { validateCommentForm } from '../../utils/validateCommentForm'

const CampsiteCommentForm = ({ campsiteId }) => {

    console.log(campsiteId)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values) => {
    console.log('values: ', values)
    const uniqueId = Math.floor(Math.random() * 1000);

    const comment = {
        campsiteId: parseInt(campsiteId),
        text: values.commentText,
        date: new Date(Date.now()).toISOString(),
        key: uniqueId

    }
    console.log('comment: ', comment);
    dispatch(addCampComment(comment));
    setShow(false)

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Comment!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Formik
                initialValues={{
                    commentText: '',  
                }}
                onSubmit={handleSubmit}
                validate={validateCommentForm}
            >
                <FForm>
                    <Form.Group>
                        <Form.Label htmlFor='commentText' ></Form.Label>
                        <Field name='commentText' as='textarea' placeholder='Add a comment!' className='form-control'/>
                        <ErrorMessage name='commentText'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Form.Group>
                    <Button type='submit' color="primary">
            Save Changes
          </Button>
                </FForm>
            </Formik>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CampsiteCommentForm;