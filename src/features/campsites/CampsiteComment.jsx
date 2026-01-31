import { deleteCampsiteComment } from "./campsitesCommentsSlice";
import { useDispatch } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


library.add(fas, far)

const CampsiteComment = ({ comment }) => {

    const dispatch = useDispatch()

    const { text: commentText, date, id } = comment;

    const formattedDate = new Date(date).toLocaleDateString()

    return (
        <>
            <p>{commentText}</p>
            <div className="d-flex justify-content-between">
                <FontAwesomeIcon
                    onClick={() => dispatch(deleteCampsiteComment(id))}
                    icon='fa-solid fa-trash-can'
                />
                <p style={{ fontSize: '.8rem', marginTop: '-.7rem' }} className='text-end'>{formattedDate}</p>
            </div>


            <hr />

        </>
    )
};

export default CampsiteComment;