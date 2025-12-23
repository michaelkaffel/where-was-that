
import Card from 'react-bootstrap/Card';
import hikePlaceholderImg from '../app/images/hikesPlaceholder.png';
import campsitePlaceholderImg from '../app/images/campsitesPlaceholder.png';
import overlookPlaceholderImg from '../app/images/overlookPlaceholder.png'

const ItemDetails = ({ item }) => {
    const { image, description, location, title, kindOfPlace } = item;



    let imageInsert;

    if (!image) {
        switch (kindOfPlace) {
            case 'campsite':
                imageInsert = campsitePlaceholderImg;
                break;
            case 'hike':
                imageInsert = hikePlaceholderImg;
                break;
            case 'overlook':
                imageInsert = overlookPlaceholderImg;
                break;
            default:
        }
    } else imageInsert = image

    return (
        <>
            
                    
                       
                            <Card.Img variant='top' alt={title} src={imageInsert} />
                            <Card.Body>
                                
                                <Card.Text>
                                    <h3>{description}</h3>
                                </Card.Text>
                                <Card.Title className='text-end'>
                                    {location}
                                    
                                </Card.Title>
                            </Card.Body>
                       
                    
                

        </>
    )
}

export default ItemDetails;

