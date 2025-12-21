import placeHolderImg from '../app/images/hikesPlaceholder.png'

const ItemDetails = ({ item }) => {
    const { id, image, title, description, location, googleMap } = item;

    

    let imageInsert;

    if (!image) {
        imageInsert = placeHolderImg   
    } else imageInsert = image

    return (
        <>
            <img src={imageInsert} className='img-fluid' />
            {googleMap}
            {location}
            <div>{googleMap}</div>
            <div>{description}</div>
            

        </>
    )
}

export default ItemDetails;

