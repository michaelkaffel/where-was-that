import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { selectOverlooksById } from '../features/overlooks/overlooksSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeaderOverlooks from '../components/SubHeaderOverlooks';

const OverlookDetailPage = () => {

    const { id } = useParams();
    const overlook = useSelector(selectOverlooksById(id));
    const { title } = overlook



    return (
        <>
            <Container>
                <SubHeaderOverlooks current={overlook.title} detail={true} />
                <h2>{title}</h2>
                <ItemDetails item={overlook} />
            </Container>
        </>
    )
}

export default OverlookDetailPage;