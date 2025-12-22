import Container from 'react-bootstrap/Container';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeaderCampsites from '../components/SubHeaderCampsites';
import AccordionForCampsiteForm from '../features/campsites/AccordionForCampsiteForm';


const CampingSpotsPage = () => {
    return (
        <>
            <Container>
                <SubHeaderCampsites current='Camping Spots'/>
                <h2 className='text-center'>Camping Spots</h2>
                <AccordionForCampsiteForm />
                <CampsitesList />
            </Container>
        </>
    )
};

export default CampingSpotsPage;