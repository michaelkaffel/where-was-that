import { useSelector } from "react-redux";
import { Row, Col } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);

    return (
        <Row className='mx-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col
                        md='4'
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                )
            })}
        </Row>
    )
};

export default CampsitesList;