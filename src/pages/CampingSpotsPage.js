import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';


const CampingSpotsPage = () => {
    return (
        <>
            <h2 className='text-center'>Camping Spots</h2>
            <Container>
                <CampsitesList />
            </Container>
        </>
    )
};

export default CampingSpotsPage;