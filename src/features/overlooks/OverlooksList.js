import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ItemCard from '../../components/ItemCard';
import { selectAllOverlooks } from './overlooksSlice';

const OverlooksList = () => {
    const overlooks = useSelector(selectAllOverlooks);

    return (
        <Row className='mx-auto'>
            {overlooks.map((overlook) => {
                return (
                    <Col
                        md='4'
                        key={overlook.id}
                    >
                        <ItemCard item={overlook} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default OverlooksList;