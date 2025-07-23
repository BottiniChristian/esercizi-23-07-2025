import React from "react";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

const App = () => {
  return (
    <>
      <MyNav />
      <Welcome />
     <BookList books={fantasy} onSelectBook={() => {}} />
      <MyFooter />
    </>
  );
};
export default App;
