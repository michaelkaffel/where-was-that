import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ItemCard from '../../components/ItemCard';
import { selectAllHikes } from './hikesSlice';

const HikesList = () => {
    const hikes = useSelector(selectAllHikes);

    return (
        <Row className='mx-auto'>
            {hikes.map((hike) => {
                return (
                    <Col
                        md='4'
                        key={hike.id}
                    >
                        <ItemCard item={hike} />
                    </Col>
                )
            }
        )}
        </Row>
    )
};

export default HikesList;