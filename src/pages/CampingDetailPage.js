import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container'
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
            <SubHeaderCampsites current={campsite.title} detail={true} />
            <h2>{title}</h2>
            <ItemDetails item={campsite} />
            <CampsitesCommentsList campsiteId={id} />
        </Container>
        </>
    )
}

export default CampingDetailPage;