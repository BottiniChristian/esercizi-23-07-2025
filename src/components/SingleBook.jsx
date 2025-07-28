import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  render() {
  const { book, isSelected, onBookClick } = this.props

return (
  <Card
    onClick={() => onBookClick(book.asin)}
    style={{
      border: isSelected ? '3px solid red' : '1px solid #ccc',
      cursor: 'pointer',
      height: isSelected ? 'auto' : '450px',
      transition: 'height 0.3s ease',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
    className='h-100'
  >
  <div style={{ height: '300px', overflow: 'hidden' }}>
    <Card.Img
        variant="top"
        src={book.img}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
    />
  </div>
    <Card.Body style={{ flexGrow: 1 }}>
      <Card.Title
        className={isSelected ? '' : 'text-truncate'}
        style={{ color: 'black', whiteSpace: isSelected ? 'normal' : 'nowrap' }}
      >
      {book.title}
      </Card.Title>
    </Card.Body>
    </Card>
    )
  }
}
export default SingleBook




