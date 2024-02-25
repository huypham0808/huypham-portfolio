import './App.css';
import Header from './components/Header';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App mx-auto">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
