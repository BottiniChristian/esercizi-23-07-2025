import React, { useState } from "react";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import BookDetails from "./components/BookDetails";

const App = () => {
const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} onSelectBook={setSelectedBook} />
      {selectedBook && <BookDetails book={selectedBook} />} {}
      <MyFooter />
    </>
  );
};

export default App;

