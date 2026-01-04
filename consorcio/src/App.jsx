import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HeaderComponentsRegistrado from './components/HeaderComponentsRegistrado';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import FooterComponents from './components/FooterComponents';
import ProtectedRouteAdmin from './routes/ProtectedRouteAdmin';
import AdminPage from './pages/AdminPage';
import ProtectedRouteInquilino from './routes/ProtectedRouteInquilino';
import InquilinosPage from './pages/InquilinosPage';
import HeaderHome from './components/HeaderHome';
import LogInPage from './pages/LogInPage';
import AboutPage from './pages/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'




const AppLayout = () => {
  const location = useLocation();

  const mostrarHeaderAdmin = location.pathname === '/admin';

  const mostrarHeaderInquilinos = location.pathname === '/inquilinos';

  const mostrarHeaderHome = location.pathname === '/' || location.pathname === '/about';

  const [authAdmin, setAuthAdmin] = useState(false);

  const [authInquilinos, setAuthInquilinos] = useState(false);

  function logInAdmin() {
    setAuthAdmin(true)
  };

  function logOutAdmin() {
    setAuthAdmin(false)
  };

  function logInInquilino() {
    setAuthInquilinos(true)
  };

  function logOutInquilino() {
    setAuthInquilinos(false)
  }

  return (
    <>

      {mostrarHeaderAdmin && <HeaderComponentsRegistrado />}
      {mostrarHeaderInquilinos && <HeaderComponentsRegistrado />}
      {mostrarHeaderHome && <HeaderHome />}

      <main>
        <Routes>

          <Route path='/' element={<HomePage />} />

          <Route path= '/about' element={<AboutPage/>}/>

          <Route path='/login' element={<LogInPage  authAdmin={authAdmin} authInquilinos={authInquilinos} logInAdmin={logInAdmin} logOutAdmin={logOutAdmin}
        logInInquilino={logInInquilino} logOutInquilino={logOutInquilino}/>}/>
          
          <Route path='/admin' element={
            <ProtectedRouteAdmin authAdmin={authAdmin}>
              <AdminPage />
            </ProtectedRouteAdmin>} />
          
          <Route path='/inquilinos' element={
            <ProtectedRouteInquilino authInquilinos={authInquilinos}>
              <InquilinosPage />
            </ProtectedRouteInquilino>} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>

      <FooterComponents />

    </>
  )

}


function App() {

  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App
























