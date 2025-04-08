export default function SynthesePreDeclassement() {
    return (
      <div className="p-4">
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>Dossier: <input className="border rounded px-2 py-1 w-1/2" disabled /></div>
          <div>Pré-déclassement: <input className="border rounded px-2 py-1 w-1/2" /></div>
          <div>Compte N°: <input className="border rounded px-2 py-1 w-1/2" disabled /></div>
          <div>Raison Sociale: <input className="border rounded px-2 py-1 w-full" disabled /></div>
        </div>
        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th>No Contrat</th><th>Seq</th><th>Ref & Lib Produit</th><th>Montant du Pret</th><th>Capital Restant du</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>...</td><td>...</td><td>...</td><td>...</td><td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }