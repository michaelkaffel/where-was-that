import { useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeOverlook } from './overlooksSlice';
import overlookPlaceHolderImg from '../../app/images/overlookPlaceholder.png';

const OverlookCard = ({ overlook }) => {

    const dispatch = useDispatch();

    

    const { id, image, title, description, location } = overlook;
    let imageInsert;
    

    if (!image) {
        imageInsert = overlookPlaceHolderImg   
    } else imageInsert = image

    return (
        <Card className='m-3'>
            <img alt="Sample" src={imageInsert}/>
            <CardBody>
                <CardTitle tag="h2">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {location}
                </CardSubtitle>
                <CardText>{description}</CardText>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`${id}`}>
                        <Button>
                            Details
                        </Button>
                    </Link>
                    <div>
                        {/* <i className="fa-regular fa-heart fa-xl"></i> */}
                        <i 
                            className="fa-solid fa-trash-can fa-xl"
                            onClick={() => dispatch(removeOverlook(overlook))}
                            ></i>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
};

export default OverlookCard;