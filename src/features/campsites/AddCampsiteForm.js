import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, Field, Form as FForm, ErrorMessage } from 'formik';
import { validateForm } from '../../utils/validateForm';
import { postCampsite } from './campsitesSlice';

const AddCampsiteForm = () => {

    const dispatch = useDispatch();

    const HandleSubmit = (values, {resetForm }) => {

        const campsite = {
            title: values.title,
            description: values.description, 
            //googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.750814726799!2d-123.50399052371729!3d48.057148856757124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548fb3ce7422ad01%3A0xd7fd95ceb6f6afec!2sLittle%20River%20Trail!5e0!3m2!1sen!2sus!4v1765433551258!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            image: null,
            location: values.location,
            dateVisited: values.dateVisited,
            favorite: false
        };
        
        dispatch(postCampsite(campsite))
        resetForm();
    }

    return (

        <Formik
            initialValues={{
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
                    <Field name='title' placeholder='Name of your campground...' className='form-control' />
                    <ErrorMessage name='title'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </Form.Group>
                
               
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
                    <Field name='dateVisited' type='date' className='form-control' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='description'>
                        Description
                    </Form.Label>
                    <Field name='description' as='textarea' placeholder='Describe your campsite...' className='form-control' />
                </Form.Group>
                <Button className='mt-3' type='submit' color='primary'>Add Hike!</Button>
            </FForm>
        </Formik>

    )
}

export default AddCampsiteForm;