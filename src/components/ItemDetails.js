

const ItemDetails = ({ item }) => {
    const { id, image, title, description, location } = item;

    return (
        <>
            <img src={image} className='img-fluid' />
        </>
    )
}

export default ItemDetails;