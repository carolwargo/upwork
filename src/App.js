import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ResumePage  from "./pages/ResumePage.jsx";
import PageSamples from "./pages/PageSamples.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/upwork">
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/page-samples" element={<PageSamples />} />  
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}




export default App;
