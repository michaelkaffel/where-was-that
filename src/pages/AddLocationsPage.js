import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { selectRandomOverlook } from '../features/overlooks/overlooksSlice';
import AccordionForHikeForm from '../features/hikes/AccordionForHikeForm';
import AccordionForOverlookForm from '../features/overlooks/AccordionForOverlookForm';
import AccordionForCampsiteForm from '../features/campsites/AccordionForCampsiteForm';
import placeHolderHikeImg from '../app/images/hikesPlaceholder.png';


const AddLocationsPage = () => {

    const overlook = useSelector(selectRandomOverlook);
    const { image, title } = overlook
    let imageToShow;
    if (!image) {
        imageToShow = placeHolderHikeImg
    } else {
        imageToShow = image
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <AccordionForHikeForm className='mx-2' />
                        <AccordionForCampsiteForm />
                        <AccordionForOverlookForm />
                        <img className='img-fluid mt-3 rounded' alt={title} src={imageToShow} />
                    </Col>
                </Row>
            </Container>

        </>
    )
};

export default AddLocationsPage;