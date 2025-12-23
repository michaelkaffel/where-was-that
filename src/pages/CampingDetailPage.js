import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeaderCampsites from '../components/SubHeaderCampsites';
import CampsitesCommentsList from '../features/campsites/CampsitesCommentsList';

const CampingDetailPage = () => {

    const { id } = useParams();
    const campsite = useSelector(selectCampsiteById(id));
    const { title } = campsite

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <SubHeaderCampsites current={campsite.title} detail={true} />
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <h2 className='text-center'>{title}</h2>
                        <Card>
                            <ItemDetails item={campsite} />
                            <Card.Footer>
                                <CampsitesCommentsList campsiteId={id} />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CampingDetailPage;