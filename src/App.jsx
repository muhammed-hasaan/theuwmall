// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Brands from './pages/Brands/Brands';
import CareerPage from './pages/Career/Career';
import Contactus from './pages/Contactus/ContactUs';
import Stories from './pages/Stories/Stories';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;
