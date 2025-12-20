import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import HikeCard from './HikeCard';
import { selectAllHikes } from './hikesSlice';

const HikesList = () => {
    const hikes = useSelector(selectAllHikes);

    return (
        <Row className='mx-auto'>
            {hikes.map((hike) => {
                return (
                    <Col
                        md='4'
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

export default HikesList;