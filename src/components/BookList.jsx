import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onSelectBook }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Form.Control
        placeholder="Cerca un libro..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="my-3"
      />
      <Row xs={1} md={3} lg={4} className="g-4">
        {filteredBooks.map(book => (
          <Col key={book.asin}>
            <SingleBook book={book} onSelect={() => onSelectBook(book)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

