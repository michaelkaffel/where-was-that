import Container from 'react-bootstrap/Container';
import OverlooksList from '../features/overlooks/OverlooksList';
import SubHeaderOverlooks from '../components/SubHeaderOverlooks';
import AccordionForOverlookForm from '../features/overlooks/AccordionForOverlookForm';

const OverlooksPage = () => {
    return (
        <>
            <Container>
                <SubHeaderOverlooks current='Scenic Overlooks' />
                <h2 className='text-center'>Scenic Overlooks</h2>
                <AccordionForOverlookForm />
                <OverlooksList />
            </Container>
        </>
    )
};

export default OverlooksPage;