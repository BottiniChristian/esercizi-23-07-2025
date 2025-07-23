import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onSelect();
  };

  render() {
  const { book } = this.props;
  return (
  <Card
  onClick={this.toggleSelect}
  className={`h-100 ${this.state.selected ? "border border-danger" : ""}`}
  style={{
  minHeight: "100%",        
  height: "100%",             
  display: "flex",
  flexDirection: "column",    
  cursor: "pointer",
  }}
>
  <Card.Img
    variant="top"
    src={book.img}
    style={{
    height: "300px",         
    objectFit: "cover",      
    width: "100%",
    }}
  />
  <Card.Body style={{ flexGrow: 1 }}>
    <Card.Title>{book.title}</Card.Title>
  </Card.Body>
</Card>


    );
  }
}
export default SingleBook;



