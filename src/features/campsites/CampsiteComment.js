

const CampsiteComment = ({comment}) => {
    const { text: commentText } = comment;

    return (
        <>
            <p>{commentText}</p>
        </>
    )
};

export default CampsiteComment;