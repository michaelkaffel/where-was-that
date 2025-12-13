import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeaderCampsites from '../components/SubHeaderCampsites';


const CampingSpotsPage = () => {
    return (
        <>
            <Container>
                <SubHeaderCampsites current='Camping Spots'/>
                <h2 className='text-center'>Camping Spots</h2>

                <CampsitesList />
            </Container>
        </>
    )
};

export default CampingSpotsPage;