// styles
import './components/normalize.css'
import './components/tailwind.css'

// libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import ProtectedRoute from './components/ProtectedRoute';

// pages
import Home from './pages/home/home';
import Login from './pages/login/login.tsx';
import Menu from './pages/menu/menu.jsx';
import Register from './pages/register/register.jsx';
import UnProtectedRoute from './components/UnProtectedRoute.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<UnProtectedRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/menu" element={<Menu />} />
        </Route>
        {/* <Route path='/' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
