import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Booklist from "./pages/BookList/BookList";
import EditBook from "./pages/EditBook/EditBook";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/books" element={<Booklist />}>
          <Route path=":id" element={<Booklist />} />
        </Route>
        <Route exact path="/edit-book" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
