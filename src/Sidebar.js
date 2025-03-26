import React from "react";
import "./styles.css";
 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Chercher</h2>
      <input type="text" placeholder="Rechercher..." />
      <ul>
        {["Accueil", "SPD", "SRD", "CDR", "LEC"].map((item, index) => (
          <li key={index} className={item === "SPD" ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Sidebar;