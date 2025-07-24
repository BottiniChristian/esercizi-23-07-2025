import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book, onSelect, selected }) => {
  const handleCardClick = () => {
    onSelect(book.asin); 
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`h-100 ${selected ? "border border-danger" : ""}`}
      style={{
        height: "300px", 
        cursor: "pointer",
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        style={{
          height: "200px",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      {book.price && <Card.Text>Prezzo: {book.price} €</Card.Text>}
      {book.description && <Card.Text>{book.description}</Card.Text>}
      </Card.Body>
    </Card>
  );
};
export default SingleBook;



