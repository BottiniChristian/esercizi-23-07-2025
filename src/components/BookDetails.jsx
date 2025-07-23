import { Card, Container } from "react-bootstrap";

const BookDetails = ({ book }) => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Dettagli del libro</h3>
      <Card className="p-3">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <img src={book.img} alt={book.title} style={{ width: "200px", objectFit: "cover" }} className="me-md-4 mb-3 mb-md-0" />
          <div>
            <h4>{book.title}</h4>
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Prezzo:</strong> €{book.price}</p>
            <p><em>(puoi aggiungere una descrizione statica o finta qui)</em></p>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default BookDetails;
