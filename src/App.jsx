import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Unternehmen from "./pages/Unternehmen.jsx";
import Studierende from "./pages/Studierende.jsx";
import Ressorts from "./pages/Ressorts.jsx";
import Team from "./pages/Team.jsx";
import Impressum from "./pages/Impressum.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="unternehmen" element={<Unternehmen />} />
        <Route path="studierende" element={<Studierende />} />
        <Route path="ressorts" element={<Ressorts />} />
        <Route path="team" element={<Team />} />
        <Route path="impressum" element={<Impressum />} />

        {/* Alte .html-Adressen bleiben erreichbar, falls sie noch irgendwo verlinkt sind. */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="unternehmen.html" element={<Navigate to="/unternehmen" replace />} />
        <Route path="studierende.html" element={<Navigate to="/studierende" replace />} />
        <Route path="ressorts.html" element={<Navigate to="/ressorts" replace />} />
        <Route path="team.html" element={<Navigate to="/team" replace />} />
        <Route path="impressum.html" element={<Navigate to="/impressum" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
