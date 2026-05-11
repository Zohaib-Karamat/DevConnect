import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SelectRolePage from './pages/SelectRolePage.jsx'
import SignupDeveloperPage from './pages/SignupDeveloperPage.jsx'
import SignupUserPage from './pages/SignupUserPage.jsx'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <div className="page-fade" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select-role" element={<SelectRolePage />} />
          <Route path="/login/developer" element={<LoginPage role="developer" />} />
          <Route path="/login/user" element={<LoginPage role="user" />} />
          <Route path="/signup/developer" element={<SignupDeveloperPage />} />
          <Route path="/signup/user" element={<SignupUserPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  )
}
