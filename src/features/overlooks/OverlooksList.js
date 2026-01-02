import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlookCard from './OverlookCard';
import { selectAllOverlooks } from './overlooksSlice';

const OverlooksList = () => {
    const overlooks = useSelector(selectAllOverlooks);

    if (overlooks.length === 0) {
        return (
            <h4 className='text-center my-5' >Add more overlooks</h4>
        )
    }

    return (
        <Row className='mx-auto'>
            {overlooks.map((overlook) => {
                return (
                    <Col
                        lg='4'
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