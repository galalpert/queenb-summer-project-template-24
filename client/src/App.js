import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import UploadAnimal from './pages//UploadAnimalPage/UploadAnimal';
import Login from './pages//LoginPage/LoginPage';
import SignUp from './pages//SignUpPage/SignUpPage';
import styles from './styles/App.module.css';
import NavButton from './components/common/NavButton/NavButton';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src="/logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/LoginPage" className={styles.appLink}>
              <NavButton>Login</NavButton>
              </Link>
              <Link to="/SignUpPage" className={styles.appLink}>
              <NavButton>Sign up</NavButton>
              </Link>
            <Link to="/UploadAnimal" className={styles.appLink}>
              <NavButton>Upload Animal</NavButton>
            </Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UploadAnimal" element={<UploadAnimal />} />
            <Route path="/LoginPage" element={<Login />} />
            <Route path="/SignUpPage" element={<SignUp />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; Happily adopted</p>
        </footer>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
