import placeHolderImg from '../app/images/hikesPlaceholder.png'

const ItemDetails = ({ item }) => {
    const { image, description, location, googleMap, title } = item;

    

    let imageInsert;

    if (!image) {
        imageInsert = placeHolderImg   
    } else imageInsert = image

    return (
        <>
            <img alt={title} src={imageInsert} className='img-fluid' />
            {googleMap}
            {location}
            <div>{googleMap}</div>
            <div>{description}</div>
            

        </>
    )
}

export default ItemDetails;

