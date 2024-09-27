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

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src="/logo2.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            {/* Links for Login and Sign Up */}
            <Link to="/login" className={styles.appLink}>
              <button className={styles.log}>Login</button>  {/* Link to Login page */}
            </Link>
            <Link to="/signup" className={styles.appLink}>
              <button className={styles.reg}>Sign up</button>  {/* Link to Sign Up page */}
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
