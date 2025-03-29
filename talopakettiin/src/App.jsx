import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { AboutPage } from "./pages/aboutPage";
import { ContactUsPage } from "./pages/contactUsPage";
import { Header } from "./pages/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
