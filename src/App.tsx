import ListGroup from "./components/ListGroup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/PersonalDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListGroup />} />
          <Route path="/personal-details" element={<Details />} />
          {/* Add routes for other pages */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
