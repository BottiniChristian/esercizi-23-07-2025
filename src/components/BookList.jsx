import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onSelectBook }) => {
const [search, setSearch] = useState("");
const [showAll, setShowAll] = useState(false);

const handleToggle = () => setShowAll(!showAll);

const isSearching = search.trim() !== "";

const filteredBooks = isSearching
  ? books.filter(book =>
     book.title.toLowerCase().includes(search.toLowerCase())
  )
    : showAll
    ? books
    : books.slice(0, 8);

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
            <SingleBook book={book} onSelect={() => onSelectBook(book)} />
          </Col>
        ))}
      </Row>
      {}
      {filteredBooks.length === 0 && (
        <div className="text-center text-muted my-4">
          Nessun risultato trovato 😢
        </div>
      )}
      {}
      {!isSearching && showAll && (
       <div className="text-center my-4">
        <Button variant="outline-secondary" onClick={handleToggle}>
         Mostra meno
        </Button>
      </div>
      )}
    </Container>
  );
};

export default BookList;
