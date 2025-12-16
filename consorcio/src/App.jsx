import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HeaderComponents from './components/HeaderComponents';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactoPage from './pages/ContactoPage';
import ErrorPage from './pages/ErrorPage';
import FooterComponents from './components/FooterComponents';
import ProtectedRouteAdmin from './routes/ProtectedRouteAdmin';
import AdminPage from './pages/AdminPage';
import ProtectedRouteInquilino from './routes/ProtectedRouteInquilino';
import InquilinosPage from './pages/InquilinosPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'



const AppLayout = () => {
  const location = useLocation();
  
  const mostrarHeaderAdmin = location.pathname === '/admin';

  const mostrarHeaderInquilinos = location.pathname === '/inquilinos';

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

      {mostrarHeaderAdmin && <HeaderComponents />}
      {mostrarHeaderInquilinos && <HeaderComponents />}

        <main>
          <Routes>

            <Route path='/' element={<HomePage authAdmin={authAdmin} authInquilinos={authInquilinos} logInAdmin={logInAdmin} logOutAdmin={logOutAdmin}
              logInInquilino={logInInquilino} logOutInquilino={logOutInquilino} />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacto' element={<ContactoPage />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/admin' element={
              <ProtectedRouteAdmin authAdmin={authAdmin}>
                <AdminPage />
              </ProtectedRouteAdmin>} />
            <Route path='/inquilinos' element={
              <ProtectedRouteInquilino authInquilinos={authInquilinos}>
                <InquilinosPage />
              </ProtectedRouteInquilino>} />

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
























