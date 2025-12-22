import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeHike, toggleFavoriteHike } from './hikesSlice';
import hikePlaceHolderImg from '../../app/images/hikesPlaceholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fas, far)

const HikeCard = ({ hike }) => {

    const dispatch = useDispatch();

    const { id, image, title, description, location, favorite } = hike;
    let imageInsert;
    
    if (!image) {
        imageInsert = hikePlaceHolderImg   
    } else imageInsert = image

    let favoriteButton;

    if (favorite) {
        favoriteButton = <FontAwesomeIcon 
                                    onClick={() => dispatch(
                                                        toggleFavoriteHike(hike)
                                                )}
                                    icon="fa-solid fa-heart" 
                                    size="xl" 
                                />
    } else {
        favoriteButton = <FontAwesomeIcon 
                                    onClick={() => dispatch(
                                                        toggleFavoriteHike(hike)
                                        )}
                                        icon="fa-regular fa-heart" 
                                        size="xl" 
                                    />
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
                            onClick={() => dispatch(removeHike(hike))}
                            />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
};

export default HikeCard;