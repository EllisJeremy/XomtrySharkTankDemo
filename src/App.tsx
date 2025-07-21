import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EducationPage from "./pages/EducationPage/EducationPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<EducationPage />} />
          <Route path="Resources" element={<ResourcesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
