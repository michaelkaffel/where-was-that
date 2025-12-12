import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const ItemCard = ({ item }) => {
    const { id, image, name, description, dateVisited } = item

    return (
        <Card className='m-3'>
            <img alt="Sample" src={image}/>
            <CardBody>
                <CardTitle tag="h2">{name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {dateVisited}
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

