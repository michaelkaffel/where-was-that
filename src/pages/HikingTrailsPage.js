import { Container } from 'reactstrap';
import HikesList from '../features/hikes/HikesList';
import SubHeaderHikes from '../components/SubHeaderHikes';
import AccordianForHikeForm from '../features/hikes/AccordianForHikeForm'


const HikingTrailsPage = () => {
    return (
        <>
            <Container>
                <SubHeaderHikes current='Hiking Trails'/>
                
                <h2 className='text-center'>Hiking Trails</h2>
                <AccordianForHikeForm />
                <HikesList />
            </Container>
        </>
    )
};

export default HikingTrailsPage;