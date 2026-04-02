import type { FC } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const App: FC = () => {
  return (
    <Router>
      <main className="mx-auto flex h-screen w-full flex-col">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;