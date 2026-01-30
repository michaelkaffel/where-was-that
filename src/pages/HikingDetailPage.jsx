import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { selectHikeById } from '../features/hikes/hikesSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeader from '../components/SubHeaderHikes';
import HikesCommentsList from '../features/hikes/HikesCommentsList';

const HikingDetailPage = () => {

    const { id } = useParams();
    const hike = useSelector(selectHikeById(id));
    const { title } = hike

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <SubHeader current={hike.title} detail={true} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2 className='text-center'>{title}</h2>
                        <Card>
                        <ItemDetails item={hike} />
                        <Card.Footer>
                        <HikesCommentsList hikeId={id} />
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HikingDetailPage;