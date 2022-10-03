import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import './App.css';

import { Navbar, Article, WeekCard, Cards } from './components';
import Home from './pages/home/Home';
import SecondPage from './pages/secondpage/SecondPage';

// import Navbar from './components/navbar/Navbar'
// import Article from './components/Article/Article';
// import WeekCard from './components/WeekCard/WeekCard';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="secondpage" element={<SecondPage />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
