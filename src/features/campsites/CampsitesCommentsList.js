import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import { selectCampsitesCommentsbyCampsiteId } from './campsitesCommentsSlice';
import CampsiteComment from './CampsiteComment';


const CampsitesCommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCampsitesCommentsbyCampsiteId(campsiteId));

    if (comments && comments.length > 0) {
        return (
            <Col>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <CampsiteComment key={comment.id} comment={comment} />
                })}
            </Col>
        )
    }

    return (
        <Col md='5' className='m-1'>
            <h4>Comments</h4>
            <p>There are no comments for this campsite yet.</p>
            
            {/* <CommentForm campsiteId={campsiteId}/> */}
        </Col>
    )

}

export default CampsitesCommentsList;