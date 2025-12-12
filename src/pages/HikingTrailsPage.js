import { Container } from 'reactstrap';
import HikesList from '../features/hikes/HikesList';


const HikingTrailsPage = () => {
    return (
        <>
            <h2 className='text-center'>Hiking Trails</h2>
            <Container>
                <HikesList />    
            </Container>        
        </>
    )
};

export default HikingTrailsPage;