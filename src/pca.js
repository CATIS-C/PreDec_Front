import React from "react";
import "./styles.css";
 
const pca = () => {
  return (
    <div className="container">
      <div className="form-container">
        <label>Dossier:</label>
        <input defaultValue="55984455" readOnly />
 
        <label>Pré-déclassement:</label>
        <input placeholder="Entrez O ou N" />
 
        <label>Compte N°:</label>
        <input defaultValue="00 5258 00056984" readOnly />
 
        <label>Raison Sociale:</label>
        <input defaultValue="XXXXXXXXXXX YYYYYYYYYYY" readOnly />
      </div>
 
      <table>
        <thead>
          <tr>
            <th>No Contrat</th>
            <th>Seq</th>
            <th>Ref et Lib Produit</th>
            <th>Montant du Prêt</th>
            <th>Capital Restant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111111</td>
            <td>1</td>
            <td>587 Consommation</td>
            <td>20 000.00</td>
            <td>18 478.70</td>
          </tr>
          <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
 
      <div className="button-container">
        <button>Retour</button>
      </div>
    </div>
  );
};
 
export default pca;