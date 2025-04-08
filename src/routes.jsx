import { Routes, Route } from "react-router-dom";
import Synthese from "./pages/SynthesePreDeclassement";
import SRD from "./pages/SuiviRelationDifficulte";
import CDR from "./pages/ComptabilisationDossierRisque";
import LEC from "./pages/ListeEcrituresComptables";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/synthese" element={<Synthese />} />
      <Route path="/srd" element={<SRD />} />
      <Route path="/cdr" element={<CDR />} />
      <Route path="/lec" element={<LEC />} />
    </Routes>
  );
}