import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mac from "./pages/Mac";
import Windows from "./pages/Windows";
import iOS from "./pages/iOS";
import Android from "./pages/Android";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Windows" element={<Windows />} />
          <Route path="/iOS" element={<iOS />} />
          <Route path="/Android" element={<Android />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
