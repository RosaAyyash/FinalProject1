import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeachersManagement from "./pages/TeachersManagement/TeachersManagement";
import StudentsManagement from "./pages/StudentsManagement/StudentsManagement";
import CoursesManagement from "./pages/CoursesManagement/CoursesManagement";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers-management/" element={<TeachersManagement />} />
        <Route path="/students-management/" element={<StudentsManagement />} />
        <Route path="/courses-management/" element={<CoursesManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
