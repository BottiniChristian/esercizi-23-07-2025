import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleToggle = () => setShowAll(!showAll);

  const isSearching = search.trim() !== "";

  const filteredBooks = isSearching
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    : showAll
    ? books
    : books.slice(0, 8);

  const selectedBook = books.find((book) => book.asin === selectedAsin);

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Cerca un libro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="my-3"
      />
      {!isSearching && (
        <div className="text-center mb-4">
          <Button variant="outline-secondary" onClick={handleToggle}>
            {showAll ? "Mostra meno" : "Mostra tutti"}
          </Button>
        </div>
      )}

      <Row xs={1} md={3} lg={4} className="g-4">
        {filteredBooks.map((book) => (
          <Col key={book.asin}>
            <SingleBook
              book={book}
              onSelect={() => setSelectedAsin(book.asin)}
              selected={selectedAsin === book.asin}
            />
          </Col>
        ))}
      </Row>

      {selectedBook && (
        <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
          <h4>Dettagli e recensioni per: {selectedBook.title}</h4>
          <CommentArea asin={selectedBook.asin} />
        </div>
      )}
    </Container>
  );
};
export default BookList;


