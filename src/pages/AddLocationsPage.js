import { useSelector } from 'react-redux';
import { selectRandomOverlook } from '../features/overlooks/overlooksSlice';
import AccordianForHikeForm from '../features/hikes/AccordianForHikeForm';
import AccordianForOverlookForm from '../features/overlooks/AccordianForOverlookForm';
import AccordianForCampsiteForm from '../features/campsites/AccordianForCampsiteForm';


const AddLocationsPage = () => {

    const overlook = useSelector(selectRandomOverlook);
    const { image } = overlook

    return (
        <>
            <AccordianForHikeForm className='mx-2'/>
            <AccordianForCampsiteForm />
            <AccordianForOverlookForm />
            <img className='img-fluid mt-3' src={image}/>
        </>
    )
};

export default AddLocationsPage;