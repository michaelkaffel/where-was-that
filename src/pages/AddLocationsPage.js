import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordionForHikeForm from '../features/hikes/AccordionForHikeForm';
import AccordionForOverlookForm from '../features/overlooks/AccordionForOverlookForm';
import AccordionForCampsiteForm from '../features/campsites/AccordionForCampsiteForm';
import hikePlaceholderImg from '../app/images/hikesPlaceholder.png';
import campsitePlaceholderImg from '../app/images/campsitesPlaceholder.png';
import overlookPlaceholderImg from '../app/images/overlookPlaceholder.png';
import imageOne from '../app/images/IMG_0117.jpeg';
import imageTwo from '../app/images/IMG_4064.jpeg';
import imageThree from '../app/images/IMG_2448.jpeg';
import imageFour from '../app/images/IMG_2241.jpeg';
import imageFive from '../app/images/IMG_2448.jpeg';


const AddLocationsPage = () => {

    const imageArray = [
        hikePlaceholderImg,
        campsitePlaceholderImg,
        overlookPlaceholderImg,
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive
    ]
    console.log(Math.floor(Math.random() * imageArray.length))
    const imageToShow = imageArray[Math.floor(Math.random() * imageArray.length)]




    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <AccordionForHikeForm className='mx-2' />
                        <AccordionForCampsiteForm />
                        <AccordionForOverlookForm />
                        <img className='img-fluid mt-3 rounded' alt='Beautiful scenery' src={imageToShow} />
                    </Col>
                </Row>
            </Container>

        </>
    )
};

export default AddLocationsPage;