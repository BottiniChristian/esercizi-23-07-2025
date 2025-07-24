import { Button } from "react-bootstrap";

const SingleComment = ({ comment, onDelete }) => {
  const deleteComment = async () => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIyNDc4Y2RkZjAwMTU1ZDY3OWUiLCJpYXQiOjE3NTMzNjEwNjgsImV4cCI6MTc1NDU3MDY2OH0.Y6clJsq0Yt7frciP6M2QdFSHwBdBWYZhfgvrr3hRwnU",
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

