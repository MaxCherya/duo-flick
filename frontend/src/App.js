// styles
import './components/normalize.css'
import './components/tailwind.css'

// libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
