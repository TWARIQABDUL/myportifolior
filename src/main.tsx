import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { routes } from './routes/routes.ts'
import Projects from './pages/Projects.tsx'
import About from './pages/About.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={routes.home} element={<App />} />
        <Route path={routes.project} element={<Projects />} />
        <Route path={routes.about} element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
)
