import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, Field, Form as FForm, ErrorMessage } from 'formik';
import { validateForm } from '../../utils/validateForm';
import { addHike } from './hikesSlice';


const AddHikeForm = () => {


    const dispatch = useDispatch();

    const HandleSubmit = (values, { resetForm }) => {
        const hike = {
            
            title: values.title,
            description: values.description, 
            image: null,
            location: values.location,
            dateVisited: values.dateVisited,
            favorite: false
        };
        
        dispatch(addHike(hike));
        resetForm();
    }





    return (

        <Formik
            initialValues={{
                // id: newId,
                title: '',
                description: '',
                // googleMaps: '',
                image: '',
                location: '',
                dateVisited: '',
                favorite: false
            }}
            onSubmit={HandleSubmit}
            validate={validateForm}
        >
            <FForm>
                <Form.Group>
                    <Form.Label htmlFor='title'>
                        Title
                    </Form.Label>
                    <Field name='title' placeholder='Name of your hike...' className='form-control' />
                    <ErrorMessage name='title'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Form.Group>

                {/* <Form.Group>
                    <Form.Label htmlFor='googleMaps'>
                        Google Map
                    </Form.Label>
                    <Field name='googleMap' placeholder='Paste Google Map code  <iframe src="https://www.google.com/maps/...' className='form-control' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='image'>
                        Image
                    </Form.Label>
                    <Field name='image' placeholder='Paste URL of image here' className='form-control' />
                </Form.Group> */}
                <Form.Group>
                    <Form.Label htmlFor='location'>
                        Location
                    </Form.Label>
                    <Field name='location' placeholder='Ex: City, State' className='form-control' />
                    <ErrorMessage name='location'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='dateVisited'>
                        Date Visited
                    </Form.Label>
                    <Field name='dateVisited' required type='date' className='form-control' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='description'>
                        Description
                    </Form.Label>
                    <Field name='description' required as='textarea' placeholder='Describe your hike...' className='form-control' />
                </Form.Group>
                <Button type='submit' color='primary'>Add Hike!</Button>
            </FForm>
        </Formik>

    )
}

export default AddHikeForm;