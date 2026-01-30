import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { selectOverlooksById } from '../features/overlooks/overlooksSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeaderOverlooks from '../components/SubHeaderOverlooks';
import OverlooksCommentsList from '../features/overlooks/OverlooksCommentsList';

const OverlookDetailPage = () => {

    const { id } = useParams();
    const overlook = useSelector(selectOverlooksById(id));
    const { title } = overlook



    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <SubHeaderOverlooks current={overlook.title} detail={true} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center'>{title}</h2>
                        <Card>
                            <ItemDetails item={overlook} />
                            <Card.Footer>
                                <OverlooksCommentsList overlookId={id} />
                            </Card.Footer>
                        </Card>
                    </Col>Ï
                </Row>
            </Container>
        </>
    )
}

export default OverlookDetailPage;