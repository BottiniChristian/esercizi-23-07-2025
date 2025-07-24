import books from '../data/fantasy.json';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AllTheBooks = () => (
  <Container className="mt-4">
    <Row>
      {books.map(book => (
        <Col xs={12} md={4} lg={3} 
         key={book.asin} 
          className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Prezzo: ${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
export default AllTheBooks;
