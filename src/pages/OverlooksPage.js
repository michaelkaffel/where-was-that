import { Container } from 'reactstrap';
import OverlooksList from '../features/overlooks/OverlooksList';

const OverlooksPage = () => {
    return (
        <>
            <h2 className='text-center'>Scenic Overlooks</h2>
            <Container>
                <OverlooksList />
            </Container>
        </>
    )
};

export default OverlooksPage;