import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Pca from "./pca";
import "./styles.css";
 
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Pca />
      </div>
    </div>
  );
}
 
export default App;