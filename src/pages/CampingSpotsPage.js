import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeaderCampsites from '../components/SubHeaderCampsites';
import AccordianForCampsiteForm from '../features/campsites/AccordianForCampsiteForm';


const CampingSpotsPage = () => {
    return (
        <>
            <Container>
                <SubHeaderCampsites current='Camping Spots'/>
                <h2 className='text-center'>Camping Spots</h2>
                <AccordianForCampsiteForm />
                <CampsitesList />
            </Container>
        </>
    )
};

export default CampingSpotsPage;