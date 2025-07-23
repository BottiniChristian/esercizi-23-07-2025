import { useState } from "react";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

const App = () => {
const [selectedBook, setSelectedBook] = useState(null);

 return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} onSelectBook={setSelectedBook} />
      
      {selectedBook && (
        <div style={{ margin: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h3>Dettagli libro selezionato</h3>
          <img src={selectedBook.img} 
           alt={selectedBook.title} 
           style={{ height: "200px" }} />
          <h4>{selectedBook.title}</h4>
          <p>Categoria: {selectedBook.category}</p>
          <p>Prezzo: €{selectedBook.price}</p>
        </div>
      )}
    </>
  );
};
export default App;


