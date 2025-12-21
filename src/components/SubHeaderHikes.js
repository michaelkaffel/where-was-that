import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const SubHeaderHikes = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/'>Home</Link>
                    </Breadcrumb.Item>
                    {detail && (
                        <Breadcrumb.Item>
                            <Link to='/hiking-trails'>Hiking Trails</Link>
                        </Breadcrumb.Item>
                    )}
                    <Breadcrumb.Item active>{current}</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeaderHikes;