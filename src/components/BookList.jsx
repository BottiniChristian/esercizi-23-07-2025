import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onSelectBook }) => {
const [search, setSearch] = useState("");

const filteredBooks = search
  ? books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
    : books.slice(0, 8);

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Cerca un libro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="my-4"
      />

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
    </Container>
  );
};
export default BookList;
