
import Card from 'react-bootstrap/Card';
import placeHolderImg from '../app/images/hikesPlaceholder.png'


const PreviewCard = ({ item }) => {
    const { image, title, description, location } = item

    let imageInsert;

    if (!image) {
        imageInsert = placeHolderImg   
    } else imageInsert = image

    return (
        <Card className='m-3'>
            <Card.Img variant='top' alt={title} src={imageInsert}/>
            <Card.Body>
                <Card.Title tag="h2">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" tag="h6">
                    {location}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default PreviewCard;

