import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages';
import AboutPage from './pages/About';
import Education from './pages/Education';
import Contact from './pages/Contact';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='skills' element={<SkillsPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='education' element={<Education />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
