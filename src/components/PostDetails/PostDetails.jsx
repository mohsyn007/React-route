import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const {postId}=useParams();
    const post=useLoaderData();
    const navigate=useNavigate();
    const {id,title,body}=post;
    const handleGoBack=()=>{
        navigate(-1)
    }
    console.log(postId);
    return (
        <div>
            <h2>Post Details: {id} </h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;