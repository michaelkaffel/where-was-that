import { Container } from 'reactstrap';
import OverlooksList from '../features/overlooks/OverlooksList';
import SubHeaderOverlooks from '../components/SubHeaderOverlooks';

const OverlooksPage = () => {
    return (
        <>
            <Container>
                <SubHeaderOverlooks current='Scenic Overlooks' />
                <h2 className='text-center'>Scenic Overlooks</h2>

                <OverlooksList />
            </Container>
        </>
    )
};

export default OverlooksPage;