import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Footer from "./pages/Footer"

function App() {
  return (
    <Router>
      <MainPage />
      <Footer />
    </Router>
  );
}

export default App;
