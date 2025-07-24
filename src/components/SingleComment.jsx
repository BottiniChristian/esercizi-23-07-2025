import { Button } from "react-bootstrap";

const SingleComment = ({ comment, onDelete }) => {
  const deleteComment = async () => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer YOUR_TOKEN_HERE"
        }
      });
      if (res.ok) onDelete();
    } catch (err) {
      console.error("Errore nella cancellazione", err);
    }
  };

  return (
    <li className="mb-2 d-flex justify-content-between">
      <span>{comment.comment} - ⭐{comment.rate}</span>
      <Button variant="danger" size="sm" onClick={deleteComment}>X</Button>
    </li>
  );
};

export default SingleComment;
