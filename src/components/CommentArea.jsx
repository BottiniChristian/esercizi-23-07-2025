import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
     const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
    headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIyNDc4Y2RkZjAwMTU1ZDY3OWUiLCJpYXQiOjE3NTMzNjEwNjgsImV4cCI6MTc1NDU3MDY2OH0.Y6clJsq0Yt7frciP6M2QdFSHwBdBWYZhfgvrr3hRwnU",
    },
    });

      if (!res.ok) throw new Error("Errore nel fetch");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  if (asin) {
    fetchComments();
  }
}, [asin]);


  return (
    <div className="mt-3">
      {isLoading && <Loading />}
      {hasError && <Error />}
      <CommentsList comments={comments} onDelete={fetchComments} />
      <AddComment asin={asin} onNewComment={fetchComments} />
    </div>
  );
};
export default CommentArea;
