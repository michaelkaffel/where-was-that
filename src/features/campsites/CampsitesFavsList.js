import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CampsiteCard from "./CampsiteCard";
import { selectFavoriteCampsites } from "./campsitesSlice";

const CampsitesFavesList = () => {
    const campsites = useSelector(selectFavoriteCampsites);

    if (campsites.length === 0) {
        return(
            <h4 className='text-center my-5'>Favorite some campsites!</h4>
        )
    }

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

export default CampsitesFavesList;