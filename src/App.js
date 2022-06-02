import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
