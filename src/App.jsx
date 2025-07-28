import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1 container my-3">
      <Welcome />
      <BookList />
      </main>
      <MyFooter />
    </div>
  )
}
export default App
