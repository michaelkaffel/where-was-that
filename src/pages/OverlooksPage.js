import { Container } from 'reactstrap';
import OverlooksList from '../features/overlooks/OverlooksList';
import SubHeaderOverlooks from '../components/SubHeaderOverlooks';
import AccordianForOverlookForm from '../features/overlooks/AccordianForOverlookForm';

const OverlooksPage = () => {
    return (
        <>
            <Container>
                <SubHeaderOverlooks current='Scenic Overlooks' />
                <h2 className='text-center'>Scenic Overlooks</h2>
                <AccordianForOverlookForm />
                <OverlooksList />
            </Container>
        </>
    )
};

export default OverlooksPage;