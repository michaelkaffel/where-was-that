import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeCampsite, toggleFavorite } from './campsitesSlice'
import campsitesPlaceHolderImg from '../../app/images/campsitesPlaceholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fas, far)

const CampsiteCard = ({ campsite }) => {

    const dispatch = useDispatch();

    const { id, image, title, description, location, favorite } = campsite;
    let imageInsert;
    let favoriteButton

    if (!image) {
        imageInsert = campsitesPlaceHolderImg   
    } else imageInsert = image

    if (favorite) {
        favoriteButton = <FontAwesomeIcon onClick={() => dispatch(toggleFavorite(campsite))} icon="fa-solid fa-heart" size="xl" />
    } else {
        favoriteButton = <FontAwesomeIcon onClick={() => dispatch(toggleFavorite(campsite))} icon="fa-regular fa-heart" size="xl" />
    }

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
                        {favoriteButton}
                        
                        <FontAwesomeIcon 
                            icon='fa-solid fa-trash-can'
                            size='xl'
                            onClick={() => dispatch(removeCampsite(campsite))}
                            />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
};

export default CampsiteCard;