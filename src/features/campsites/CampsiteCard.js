import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeCampsite } from './campsitesSlice'
import campsitesPlaceHolderImg from '../../app/images/campsitesPlaceholder.png';

const CampsiteCard = ({ campsite }) => {

    const dispatch = useDispatch();

    const { id, image, title, description, location } = campsite;
    let imageInsert;

    if (!image) {
        imageInsert = campsitesPlaceHolderImg   
    } else imageInsert = image

    return (
        <Card className='m-3'>
            <Card.Img variant='top' alt="Sample" src={imageInsert}/>
            <Card.Body>
                <Card.Title tag="h2">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" tag="h6">
                    {location}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
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
                            onClick={() => dispatch(removeCampsite(campsite))}
                            ></i>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
};

export default CampsiteCard;