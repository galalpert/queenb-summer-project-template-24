// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/HomePage/HomePage';
// import UploadAnimal from './pages//UploadAnimalPage/UploadAnimal';
// import styles from './styles/App.module.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className={styles.app}>
//         <header className={styles.appHeader}>
//           <img src="/logo2.png" alt="Logo" className={styles.appLogo} />
//           <nav className={styles.appNav}>
//             <Link to="/" className={styles.appLink}>
//               <button class="log">Login</button>
//               <button class="reg">Sign up</button>
//             </Link>
//           </nav>
//         </header>
//         <main className={styles.main}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/UploadAnimal" element={<UploadAnimal />} />
//           </Routes>
//         </main>
//         <footer className={styles.footer}>
//           <p>&copy; Happily adopted</p>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import UploadAnimal from './pages/UploadAnimalPage/UploadAnimal';  // Keeping this unchanged
import SignUpPage from './pages/SignUpPage/SignUpPage';  // Import Sign Up page
import LoginPage from './pages/LoginPage/LoginPage';     // Import Login page
import styles from './styles/App.module.css';
import NavButton from './components/common/NavButton/NavButton';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src="/logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>
              <NavButton>Login</NavButton>
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
            <Route path="/UploadAnimal" element={<UploadAnimal />} />  {/* Keeping UploadAnimal unchanged */}
            <Route path="/signup" element={<SignUpPage />} />  {/* Route for Sign Up page */}
            <Route path="/login" element={<LoginPage />} />  {/* Route for Login page */}
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; Happily adopted</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
