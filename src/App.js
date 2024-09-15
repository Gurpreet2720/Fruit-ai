import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './components/Main';
import OverviewPage from './components/OverviewPage';
import AuthPage from './components/AuthPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Main />} />
                <Route path="/aboutUs" element={<OverviewPage />} />
                <Route path="/" element={<AuthPage />} />

            </Routes>
        </Router>
    );
}

export default App;