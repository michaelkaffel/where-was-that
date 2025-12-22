import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom';
import { selectHikeById } from '../features/hikes/hikesSlice';
import ItemDetails from '../components/ItemDetails';
import SubHeader from '../components/SubHeaderHikes';

const HikingDetailPage = () => {

    const { id } = useParams();
    const hike = useSelector(selectHikeById(id));
    const { title } = hike

    return (
        <>
            <Container>
                <SubHeader current={hike.title} detail={true} />

                <h2>{title}</h2>
                <ItemDetails item={hike} />
            </Container>
        </>
    )
}

export default HikingDetailPage;