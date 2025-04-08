import { NavLink } from "react-router-dom";

const menu = [
  { label: "Synthèse Pré-déclassement", to: "/synthese" },
  { label: "Suivi de Relation en Difficulté", to: "/srd" },
  { label: "Comptabilisation d'un Dossier Risque", to: "/cdr" },
  { label: "Liste des Écritures Comptables", to: "/lec" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-white border-r h-full">
      <nav className="space-y-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${isActive ? "bg-orange-400 text-white" : "hover:bg-orange-100"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}