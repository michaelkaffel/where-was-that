import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeaderCampsites from '../components/SubHeaderCampsites';

const CampingDetailPage = () => {

    const { id } = useParams();
    const campsite = useSelector(selectCampsiteById(id));
    const { title } = campsite

    return (
        <>
        <Container>
            <SubHeaderCampsites current={campsite.title} detail={true} />
            <h2>{title}</h2>
            <ItemDetails item={campsite} />
        </Container>
        </>
    )
}

export default CampingDetailPage;