import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import { selectCampsitesCommentsbyCampsiteId } from './campsitesCommentsSlice';
import CampsiteComment from './CampsiteComment';


const CampsitesCommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCampsitesCommentsbyCampsiteId(campsiteId));

    return (
        <Col>
            <h4>Comments</h4>
            {comments.map((comment) => {
                return <CampsiteComment key={comment.id} comment={comment} />
            })}
        </Col>
    )
}

export default CampsitesCommentsList;