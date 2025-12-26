import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HikeCard from './HikeCard';
import { selectFavoriteHikes } from './hikesSlice';

const HikesFavList = () => {
    const hikes = useSelector(selectFavoriteHikes);

    if (hikes.length === 0) {
        return (
            <h4 className='text-center my-5'>Favorite some hikes!</h4>
        )
    }

    return (
        <Row className='mx-auto'>
            {hikes.map((hike) => {
                return (
                    <Col
                        lg='4'
                        key={hike.key || hike.id}
                    >
                        <HikeCard hike={hike} />
                    </Col>
                )
            }
        )}
        </Row>
    )
};

export default HikesFavList;