import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import placeHolderImg from '../app/images/hikesPlaceholder.png'


const PreviewCard = ({ item }) => {
    const { image, title, description, location } = item

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
            </CardBody>
        </Card>
    )
};

export default PreviewCard;

