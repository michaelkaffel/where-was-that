

const OverlookComment = ({ comment }) => {
    const { text: commentText } = comment;

    return (
        <>
            <p>{commentText}</p>
            <hr/>
        </>
    )
};

export default OverlookComment;