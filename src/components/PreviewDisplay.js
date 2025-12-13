import { Row, Col, Container } from 'reactstrap'
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";
import { selectRandomHike } from '../features/hikes/hikesSlice';
import { selectRandomOverlook } from '../features/overlooks/overlooksSlice';
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import PreviewCard from './PreviewCard';

const PreviewDisplay = () => {
    const items = useSelector((state) => [
        selectRandomCampsite(state),
        selectRandomHike(state),
        selectRandomOverlook(state)
    ]);

    console.log(items);

    const [campsite, hike, overlook] = items

    console.log(campsite);
    console.log(hike);
    console.log(overlook);


    return (
        <>
            <hr className='mt-3'/>
            <Container>
                <h2 className='text-center'>Highlights</h2>
                <Row>
                    <Col md='4'>
                        <PreviewCard item={campsite} />
                    </Col>
                    <Col md='4'>
                        <PreviewCard item={hike} />
                    </Col>
                    <Col md='4'>
                        <PreviewCard item={overlook} />
                    </Col>
                    
                </Row>
            </Container>


        </>
    )
}

export default PreviewDisplay;

