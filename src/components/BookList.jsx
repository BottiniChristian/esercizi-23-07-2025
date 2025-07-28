import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
  selectedAsin: null,
  }

  handleBookClick = (asin) => {
    this.setState({ selectedAsin: asin })
  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <Row className="g-2">
            {fantasy.map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook
                  book={book}
                  isSelected={this.state.selectedAsin === book.asin}
                  onBookClick={this.handleBookClick}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={4}>
        <CommentArea asin={this.state.selectedAsin} />
        </Col>
      </Row>
    )
  }
}
export default BookList



