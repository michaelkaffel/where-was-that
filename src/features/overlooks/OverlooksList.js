import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import OverlookCard from './OverlookCard';
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
                        <OverlookCard overlook={overlook} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default OverlooksList;