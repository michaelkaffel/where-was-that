import { useSelector, useDispatch } from 'react-redux';
import { Button, FormGroup, Label } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addOverlook } from './overlooksSlice';
import { validateForm } from '../../utils/validateForm';
// import { selectAllHikes } from './hikesSlice';

const AddOverlookForm = () => {

    const dispatch = useDispatch();

    const HandleSubmit = (values, {resetForm }) => {

        const overlook = {
            // id: newId,
            title: values.title,
            description: values.description, 
            //googleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.750814726799!2d-123.50399052371729!3d48.057148856757124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548fb3ce7422ad01%3A0xd7fd95ceb6f6afec!2sLittle%20River%20Trail!5e0!3m2!1sen!2sus!4v1765433551258!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            image: null,
            location: values.location,
            dateVisited: values.dateVisited,
            favorite: null
        };

        dispatch(addOverlook(overlook));
        resetForm();
    }





    return (

        <Formik
            initialValues={{
                // id: newId,
                title: '',
                description: '',
                // googleMaps: '',
                image: null,
                location: '',
                dateVisited: '',
                favorite: null
            }}
            onSubmit={HandleSubmit}
            validate={validateForm}
        >
            <Form>
                <FormGroup>
                    <Label htmlFor='title'>
                        Title
                    </Label>
                    <Field name='title' placeholder='Name of your overlook...' className='form-control' />
                    <ErrorMessage name='title'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                
                {/* <FormGroup>
                    <Label htmlFor='googleMaps'>
                        Google Map
                    </Label>
                    <Field name='googleMap' placeholder='Paste Google Map code  <iframe src="https://www.google.com/maps/...' className='form-control' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='image'>
                        Image
                    </Label>
                    <Field name='image' placeholder='Paste URL of image here' className='form-control' />
                </FormGroup> */}
                <FormGroup>
                    <Label htmlFor='location'>
                        Location
                    </Label>
                    <Field name='location' placeholder='Ex: City, State' className='form-control' />
                    <ErrorMessage name='location'>
                        {(msg) => <p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='dateVisited'>
                        Date Visited
                    </Label>
                    <Field name='dateVisited' type='date' className='form-control' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>
                        Description
                    </Label>
                    <Field name='description' as='textarea' placeholder='Describe your overlook...' className='form-control' />
                </FormGroup>
                <Button type='submit' color='primary'>Add Overlook!</Button>
            </Form>
        </Formik>

    )
}

export default AddOverlookForm;