import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
  comments: [],
  isLoading: false,
  isError: false,
  }

  fetchComments = async () => {
    if (!this.props.asin) return
    this.setState({ isLoading: true, isError: false })

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmIyNDc4Y2RkZjAwMTU1ZDY3OWUiLCJpYXQiOjE3NTM3MDU0ODAsImV4cCI6MTc1NDkxNTA4MH0.7pdkzsNDwmq9rH6xCzIVp-YXrwegm8KI15nYtPseSpM",
          },
        }
      )
      if (!response.ok) throw new Error('Fetch failed')
      const data = await response.json()
      this.setState({ comments: data, isLoading: false })
    } catch {
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }

  render() {
    if (!this.props.asin) {
      return <div className="alert alert-info">Seleziona un libro per vedere i commenti</div>
    }

    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentsList comments={this.state.comments} refresh={this.fetchComments} />
        <AddComment asin={this.props.asin} refresh={this.fetchComments} />
      </div>
    )
  }
}
export default CommentArea
