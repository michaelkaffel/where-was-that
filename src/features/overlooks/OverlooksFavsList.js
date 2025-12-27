import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlookCard from './OverlookCard';
import { selectFavoriteOverlooks } from './overlooksSlice';

const OverlooksFavList = () => {
    const overlooks = useSelector(selectFavoriteOverlooks);

    if (overlooks.length === 0) {
        return (
            <h4 className='text-center my-5' >Favorite more overlooks</h4>
        )
    }

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

export default OverlooksFavList;