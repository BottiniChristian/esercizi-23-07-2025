import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState(
      prevState => ({ selected: !prevState.selected }),
      () => {
        this.props.onSelect();
      }
    );
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.handleClick}
        className={`h-100 ${selected ? "border border-danger border-3" : ""}`}
        style={{ cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          style={{ height: "300px", objectFit: "cover", border: '1px solid black'}}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;


