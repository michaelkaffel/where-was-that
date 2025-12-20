import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import placeHolderImg from '../app/images/hikesPlaceholder.png'

const ItemCard = ({ item }) => {
    const { id, image, title, description, location } = item
    let imageInsert;

    if (!image) {
        imageInsert = placeHolderImg   
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
                        <i className="fa-regular fa-heart fa-xl"></i>
                        <i className="fa-solid fa-trash-can fa-xl"></i>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
};

export default ItemCard;

