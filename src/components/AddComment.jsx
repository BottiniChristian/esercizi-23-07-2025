import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, onNewComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIyNDc4Y2RkZjAwMTU1ZDY3OWUiLCJpYXQiOjE3NTMzNjEwNjgsImV4cCI6MTc1NDU3MDY2OH0.Y6clJsq0Yt7frciP6M2QdFSHwBdBWYZhfgvrr3hRwnU",
        },
        body: JSON.stringify({ comment, rate, elementId: asin })
      });
      if (res.ok) {
        setComment("");
        setRate(1);
        onNewComment();
      }
    } catch (err) {
      console.error("Errore nel post del commento", err);
    }
  };

  return (
    <Form onSubmit={postComment}>
      <Form.Group className="mb-2">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          type="text"
          placeholder="Scrivi un commento"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="success">Invia</Button>
    </Form>
  );
};
export default AddComment;


